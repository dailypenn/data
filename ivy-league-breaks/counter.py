
import json, csv
from datetime import timedelta, date

with open("columbia-breaks-2018.json") as json_data, open("out.csv", "w") as output:
    writer = csv.writer(output)
    data = json.load(json_data)
    writer.writerow(["Holidays","Days Off"])
    writer.writerow(["Winter Break", 24])
    for p in data:
        year_start = int(p['start'][0:3])
        year_end = int(p['end'][0:3])
        month_start = int(p['start'][4:6])
        month_end = int(p['end'][4:6])
        day_start = int(p['start'][6:8])
        day_end = int(p['end'][6:8])
        #print day_end
        writer.writerow([p['summary'],(date(year_end, month_end, day_end) - date(year_start, month_start, day_start)).days])
