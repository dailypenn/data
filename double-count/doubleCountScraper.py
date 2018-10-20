import requests
from bs4 import BeautifulSoup as bs
import csv

BASE_URL = "https://apps.sas.upenn.edu/genreq/results.php?"

SECTORS = {
    "I: Society"                       : "req[]=S&cls=10",
    "II: History and Tradition"        : "req[]=H&cls=10",
    "III: Arts and Letters"            : "req[]=A&cls=10",
    "IV: Humanities and Social Science": "req[]=O&req[]=B&cls=10",
    "V: Living World"                  : "req[]=L&cls=10",
    "VI: Physical World"               : "req[]=P&cls=10",
    "VII: Natural Sciences and Math"   : "req[]=N&req[]=B&cls=10",
    "Quantitative Data Analysis"       : "type=M&cls=10",
    "Formal Reasoning & Analysis"      : "type=FR&cls=10",
    "Cross Cultural Analysis"          : "type=C1&cls=10",
    "Cultural Diversity in the U.S."   : "type=C2&cls=10",
    "Language"                         : "req[]=M&cls=10"
}

course_names = {}
course_map = {}
course_data = {}
double_counts = {}
# TODO: ADD WRITING

def getData(url, req_name):
    r = requests.get(url)

    data = r.text
    soup = bs(data, "html.parser")
    table = soup.find('table', class_="cell2010")

    for row in table.findAll('tr')[1:]:  # strip header row
        cols = row.findAll('td')[1:]     # strip spacer column
        for col in cols:
            name = cols[0].text
            code = cols[1].text

            # add course code to name mapping
            course_names[code] = name

            # if name in course_map.keys():
            #     course_map[name].add(code)
            # else:
            #     course_map[name] = {code}

            # add what course fufills
            if code not in course_data.keys():
                course_data[code] = {req_name}
            else:
                course_data[code].add(req_name)

def printSet(set):
    return ', '.join(set)

for name, querystr in SECTORS.iteritems():
    print "doing ", name
    getData(BASE_URL + querystr, name)

with open('double_count.csv', 'wb') as csvfile:
    csv = csv.writer(csvfile)

    # find where multiple reqs are satisfied, combine over name
    for code, reqs in course_data.iteritems():
        if len(course_data[code]) > 1:
            csv.writerow([course_names[code], code, printSet(course_data[code])])
