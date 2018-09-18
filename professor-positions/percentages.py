import sys, csv

if len(sys.argv) is not 2:
    raise Exception('Please enter one department name.')

dept = sys.argv[1]

with open('data/' + dept + '_instructors_positions.csv', 'r') as file, open('data/' + dept + '_percentages.csv', 'w') as out:
    r = csv.reader(file)
    w = csv.writer(out)
    header = True

    # write output header row
    w.writerow(['Affiliation', 'Number', 'Percent'])
    affiliations = {'PROFESSOR': 0, 'LECTURER': 0}
    total = 0

    for row in r:
        # skip the header
        if header:
            header = False
            continue

        total += 1
        position = row[1].upper()
        if 'PROF' in position:
            affiliations['PROFESSOR'] += 1
        elif 'LECT' in position:
            affiliations['LECTURER'] += 1
        else:
            if position in affiliations:
                affiliations[position] += 1
            else:
                affiliations[position] = 1

    for position in affiliations:
        w.writerow([position, affiliations[position], affiliations[position] / total])
