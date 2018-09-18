import os, sys, csv, requests, time
from penn import Directory

if len(sys.argv) is not 2:
    raise Exception('Please enter one department name.')

dept = sys.argv[1]
DIR_USERNAME = os.environ['DIR_USERNAME']
DIR_PASSWORD = os.environ['DIR_PASSWORD']
dr = Directory(DIR_USERNAME, DIR_PASSWORD)

with open('data/' + dept + '_instructors.csv', 'r') as file, open('data/' + dept + '_instructors_positions.csv', 'w') as out:
    r = csv.reader(file)
    w = csv.writer(out)
    header = True

    # write output header row
    w.writerow(['Name', 'Affiliation'])

    for row in r:
        # skip the header
        if header:
            header = False
            continue

        # wait a second so the API doesn't get cranky and lock us out
        time.sleep(1)
        people_detailed = dr.detail_search({'first_name': row[1], 'last_name': row[2]})

        # if there are no results, try just with their first name, no middle initial
        if len(people_detailed['result_data']) is 0:
            people_detailed = dr.detail_search({'first_name': row[1].split(' ')[0], 'last_name': row[2]})

        for people in people_detailed['result_data']:
            person = people['result_data'][0]
            affiliations = ['']
            if len(person['affiliation_views']) is not 0:
                affiliations = person['affiliation_views'][0]['affilliation_info'].split(',')
            w.writerow([row[0], affiliations[0].strip()])
            # just use the first person we find
            # this isn't perfect, but few people have duplicate names
            break
