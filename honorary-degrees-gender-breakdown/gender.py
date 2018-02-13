import csv
import gender_guesser.detector as gender
d = gender.Detector()
from genderizer.genderizer import Genderizer as g

with open('honorees_clean.csv', 'rb') as honorees, open('genders.csv', 'wb') as output:
    r = csv.reader(honorees)
    w = csv.writer(output)

    w.writerow(['Name', 'Gender Guesser', 'Genderizer'])

    for row in r:
        name = row[0]
        names = name.split(' ')
        gender = d.get_gender(names[0])
        gender2 = g.detect(firstName=names[0])
        w.writerow([name, gender, 'unknown' if gender2 is None else gender2])
