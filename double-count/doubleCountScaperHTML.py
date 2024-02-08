import requests
from bs4 import BeautifulSoup as bs
import pandas as pd
import csv

courses_sectors = pd.DataFrame(columns=['course_name', 'course_code', 'sector'])
courses_foundations = pd.DataFrame(columns=['course_name', 'course_code', 'foundations'])

BASE_URL = "https://apps.sas.upenn.edu/genreq/results.php?"

SECTORS = {
    "I: Society"                       : "req[]=S&cls=10",
    "II: History and Tradition"        : "req[]=H&cls=10",
    "III: Arts and Letters"            : "req[]=A&cls=10",
    "IV: Humanities and Social Science": "req[]=O&req[]=B&cls=10",
    "V: Living World"                  : "req[]=L&cls=10",
    "VI: Physical World"               : "req[]=P&cls=10",
    "VII: Natural Sciences and Math"   : "req[]=N&req[]=B&cls=10",
}

FOUNDATIONS = {
    "Quantitative Data Analysis"       : "type=M&cls=10",
    "Formal Reasoning & Analysis"      : "type=FR&cls=10",
    "Cross Cultural Analysis"          : "type=C1&cls=10",
    "Cultural Diversity in the U.S."   : "type=C2&cls=10",
    "Language"                         : "req[]=M&cls=10"
}

def getData(url, req_name):
    r = requests.get(url)

    global courses_sectors
    global courses_foundations
    data = r.text
    soup = bs(data, "html.parser")
    table = soup.find('table', class_="cell2010")

    for row in table.findAll('tr')[1:]:  # strip header row
        cols = row.findAll('td')[1:]     # strip spacer column
        for col in cols:

            name = cols[0].text
            code = cols[1].text

            if req_name in SECTORS.keys():
                courses_sectors = courses_sectors.append({'course_name': name, 'course_code': code, 'sector': req_name}, ignore_index = True)
            else:
                courses_foundations = courses_foundations.append({'course_name': name, 'course_code': code, 'foundations': req_name}, ignore_index = True)


for name, querystr in SECTORS.items():
    print("doing ", name)
    getData(BASE_URL + querystr, name)

for name, querystr in FOUNDATIONS.items():
    print("doing ", name)
    getData(BASE_URL + querystr, name)


def getFoundation(r):
    name = r['course_name']
    if not courses_foundations[courses_foundations['course_name'] == name].empty:
        r['Foundation'] = courses_foundations[courses_foundations['course_name'] == name].iloc[0]['foundations']
    return r

courses_sectors = courses_sectors.drop_duplicates()
courses_foundations = courses_foundations.drop_duplicates()
courses_combined = courses_sectors.apply(getFoundation, axis = 1)
courses_combined = courses_combined.dropna()
courses_combined = courses_combined.groupby('course_name').agg({'course_code': '\\n'.join, 'sector': 'first', 'Foundation': 'first'})
courses_combined = courses_combined.sort_values(['course_name']).reset_index()
courses_combined = courses_combined.rename(columns = {'course_name': 'Course Name', 'course_code': 'Course Code', 'sector': 'Sector'})

# with open('double_count_table_2022f.html', 'w+') as htmlfile:
#     courses_combined.to_html(htmlfile)

# with open('double_count-2023f.csv', 'w+') as csvfile:
#     courses_combined.to_csv(csv)

courses_combined.to_csv('double_count-2023f.csv')
