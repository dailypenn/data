import csv, sys

start = '1757'
end = '2018'

# if you want to get the data since a certain year
if len(sys.argv) is 2:
    start = sys.argv[1]

# if you want to get a range of data (inputs must be increasing)
if len(sys.argv) is 3:
    start = sys.argv[1]
    end = str(int(sys.argv[2]) + 1)

with open('genders_clean.csv', 'rb') as genders:
    r = csv.reader(genders)

    female = 0
    male = 0
    header = True
    in_range = False

    for row in r:
        # skip the header
        if header:
            header = False
            continue

        # only start aggregating when we get to the start year
        if not in_range and row[1] == start:
            in_range = True

        # stop aggregating when get to the end year
        if in_range and row[1] == end:
            in_range = False

        # make sure we're in range
        if not in_range:
            continue

        # sum by gender
        if row[4] == 'female':
            female += 1
        else:
            male += 1

# calculate percentage of women for each broken-down year
total = female + male
percent_female = float(female) / total

print 'from', start, 'to', str(int(end) - 1)
print 'total female', female
print 'total male', male
print 'total recepients', total
print 'percentage female', percent_female
