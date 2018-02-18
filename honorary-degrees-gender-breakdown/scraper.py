import requests, csv, sys
from bs4 import BeautifulSoup as bs

# argument handling
if len(sys.argv) is not 2:
    sys.exit('Please enter a school name to scrape! (Options: Penn or Harvard)')

school = sys.argv[1].lower()

if school != 'penn' and school != 'harvard':
    sys.exit('Not a valid school. Try Penn or Harvard!')

# assign url based on input
url = 'https://secure.www.upenn.edu/secretary/hondegchron.html'
if school == 'harvard':
    url = 'https://www.harvard.edu/on-campus/commencement/honorary-degrees'

r = requests.get(url)
data = r.text
soup = bs(data, 'html.parser')
honorees_by_year = {}

def penn():
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
    return fixed_years

def harvard():
    years = {}
    header = True
    for row in soup.findAll('tr'):
        if header:
            header = False
            continue

        # map all names in this list to their year
        cells = row.findAll('td')
        if len(cells) < 1:
            continue
        names = cells[1].text.split(',')
        year = int(cells[0].text)
        if year in years:
            years[year] += names
        else:
            years[year] = names

    # strip names and fix Jr. cases
    for year in years:
        fixed_names = []
        names = years[year]
        for i, name in enumerate(names):
            if name.strip() == 'Jr.':
                fixed_names[len(fixed_names) - 1] += ' Jr.'
            else:
                fixed_names.append(name.strip().encode('utf8'))
        years[year] = fixed_names
    return years

if school == 'penn':
    honorees_by_year = penn()
elif school == 'harvard':
    honorees_by_year = harvard()

with open('honorees_' + school + '.csv', 'wb') as output:
    honorees = csv.writer(output)

    for year in sorted(honorees_by_year):
        for name in honorees_by_year[year]:
            honorees.writerow([name, year])
