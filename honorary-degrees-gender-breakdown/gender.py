import csv, sys
import gender_guesser.detector as gender
d = gender.Detector()
from genderizer.genderizer import Genderizer as g

# argument handling
if len(sys.argv) is not 2:
    sys.exit('Please enter a school name to scrape! (Options: Penn or Harvard)')

school = sys.argv[1].lower()

if school != 'penn' and school != 'harvard':
    sys.exit('Not a valid school. Try Penn or Harvard!')

with open('honorees_' + school + '_clean.csv', 'rb') as honorees, open('genders_' + school + '.csv', 'wb') as output:
    r = csv.reader(honorees)
    w = csv.writer(output)

    w.writerow(['Name', 'Year', 'Gender Guesser', 'Genderizer', 'Final'])

    for row in r:
        name = row[0]
        names = name.split(' ')
        gender = d.get_gender(names[0])
        gender2 = g.detect(firstName=names[0])
        w.writerow([name, row[1], gender, 'unknown' if gender2 is None else gender2, gender if gender == gender2 else 'unknown'])
