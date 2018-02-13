import requests
from bs4 import BeautifulSoup as bs
import csv

url = 'https://secure.www.upenn.edu/secretary/hondegchron.html'
r = requests.get(url)
data = r.text
soup = bs(data, 'html.parser')

names = []

for year in soup.findAll('h2'):
    honorees = year.next_sibling.next_sibling.get_text().splitlines()

    name = ''
    for s in honorees:
        if not s.startswith('(') and not s.startswith('January'):
            name += s.replace(u'\xa0', u' ').strip().encode('utf8')

        degrees = 'D.' in name or 'M.' in name or 'B.' in name
        mistakes = 'Award' in name or '.D' in name or 'L.' in name
        if degrees or mistakes:
            names.append(name)
            name = ''

fixed_names = []

for name in names:
    n = name.split(',')
    name = ''
    for i in range(1, len(n) - 1):
        name += n[i].strip() + ' '
    name += n[0].title()
    fixed_names.append(name.strip())

with open('honorees.csv', 'wb') as output:
    honorees = csv.writer(output)

    for name in fixed_names:
        honorees.writerow([name])
