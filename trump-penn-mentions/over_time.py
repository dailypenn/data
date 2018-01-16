import sys, csv
from datetime import timedelta, date

if len(sys.argv) is not 2:
    sys.exit('Please enter a single file name. Wrap it in quotes if it has spaces!')

input_file = sys.argv[1]
output_file = input_file.split('.csv')[0]

with open(input_file, 'rb') as data, open(output_file + '_over_time.csv', 'wb') as output:
    reader = csv.reader(data)
    writer = csv.writer(output)

    # get the range of dates from when Trump announced his candidacy to today
    def date_range(start_date, end_date):
        for n in range(int((end_date - start_date).days)):
            yield end_date - timedelta(n)

    start_date = date(2015, 6, 15)
    end_date = date(2018, 1, 16)
    range_list = []
    for date in date_range(start_date, end_date):
        range_list.append(date.strftime("'%Y-%m-%d'"))

    writer.writerow(range_list)

    # sum up the mentions by day
    mentions = {}
    for row in reader:
        if reader.line_num != 1:
            date = row[1]
            if mentions.has_key(date):
                mentions[date] += 1
            else:
                mentions[date] = 1

    # fill in remaining days with zero mentions
    mentions_list = []
    for date in range_list:
        date = date[1:len(date) - 1]
        if mentions.has_key(date):
            mentions_list.append(mentions[date])
        else:
            mentions_list.append(0)

    writer.writerow(mentions_list)
