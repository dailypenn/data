import csv, sys

if len(sys.argv) < 2:
    sys.exit('Please enter a school name! Try Penn or Brown.')

school = sys.argv[1]

with open('data/genders_' + school + '_clean.csv', 'rb') as genders, open('data/over_time_' + school + '.csv', 'wb') as out:
    r = csv.reader(genders)
    w = csv.writer(out)
    header = True

    years_male = {}
    years_female = {}

    for row in r:
        # skip the header
        if header:
            header = False
            continue

        # make sure this year has an entry
        year = int(row[1])
        if year not in years_female:
            years_female[year] = 0
        if year not in years_male:
            years_male[year] = 0

        # sum by gender
        if row[4] == 'female':
            years_female[year] += 1
        else:
            years_male[year] += 1

    # write out percentages by year
    w.writerow(['Year', 'Percent Female', 'Percent Male'])
    for year in years_male:
        total = float(years_male[year] + years_female[year])
        w.writerow([year, years_female[year] / total, years_male[year] / total])
