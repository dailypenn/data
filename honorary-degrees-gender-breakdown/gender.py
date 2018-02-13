import csv
import gender_guesser.detector as gender
d = gender.Detector()

with open('honorees_clean.csv', 'rb') as honorees, open('genders.csv', 'wb') as output:
    r = csv.reader(honorees)
    w = csv.writer(output)

    for row in r:
        name = row[0]
        names = name.split(' ')
        gender = d.get_gender(names[0])
        w.writerow([name, gender])
