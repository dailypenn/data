import csv, sys

# if you want to divide the data at a certain year
year = None
if len(sys.argv) is 2:
    year = sys.argv[1]

with open('genders_clean.csv', 'rb') as genders:
    r = csv.reader(genders)

    female = [0]
    male = [0]
    curr = 0
    multi = False
    header = True

    if year is not None:
        multi = True
        female.append(0)
        male.append(0)

    for row in r:
        if header:
            header = False
            continue
        if multi and curr is 0 and row[1] == year:
            curr += 1

        if row[4] == 'female':
            female[curr] += 1
        else:
            male[curr] += 1

# calculate percentage of women for each broken-down year
totals = []
percent_female = []
for i in range(len(female)):
    totals.append(female[i] + male[i])
    percent_female.append(float(female[i]) / totals[i])

print 'after', year + ', before', year
print 'total female', female
print 'total male', male
print 'total recepients', totals
print 'percentage female', percent_female
