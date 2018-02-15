import requests
from bs4 import BeautifulSoup as bs
import csv

url = 'https://secure.www.upenn.edu/secretary/hondegchron.html'
r = requests.get(url)
data = r.text
soup = bs(data, 'html.parser')

years = {}
names = []
for year in soup.findAll('h2'):
    honorees = year.next_sibling.next_sibling.get_text().splitlines()
    names = []

    name = ''
    for s in honorees:
        if not s.startswith('(') and not s.startswith('January'):
            name += s.replace(u'\xa0', u' ').strip().encode('utf8')

        degrees = 'D.' in name or 'M.' in name or 'B.' in name
        mistakes = 'Award' in name or '.D' in name or 'L.' in name
        if degrees or mistakes:
            names.append(name)
            name = ''

    years[int(year.text)] = names

fixed_years = {}
for year in years:
    fixed_names = []
    for name in years[year]:
        n = name.split(',')
        name = ''
        for i in range(1, len(n) - 1):
            name += n[i].strip() + ' '
        name += n[0].title().strip()
        fixed_names.append(name)
    fixed_years[year] = fixed_names

with open('honorees.csv', 'wb') as output:
    honorees = csv.writer(output)

    for year in fixed_years:
        for name in fixed_years[year]:
            honorees.writerow([name, year])
