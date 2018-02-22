import requests, csv, sys
from bs4 import BeautifulSoup as bs

# argument handling
if len(sys.argv) is not 2:
    sys.exit('Please enter a school name to scrape! (Options: Penn, Brown, or Harvard)')

school = sys.argv[1].lower()

if school != 'penn' and school != 'harvard' and school != 'brown':
    sys.exit('Not a valid school. Try Penn, Brown, or Harvard!')

# assign url based on input
url = 'https://secure.www.upenn.edu/secretary/hondegchron.html'
if school == 'harvard':
    url = 'https://www.harvard.edu/on-campus/commencement/honorary-degrees'
if school == 'brown':
    url = 'https://www.brown.edu/about/administration/corporation/2000s'

r = requests.get(url)
data = r.text
soup = bs(data, 'html.parser')
honorees_by_year = {}

# gets data from Penn's website
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

# gets data from Harvard's website
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

# gets data from Brown's website
def brown():
    years = {}
    c20 = 'https://www.brown.edu/about/administration/corporation/2000s'
    c19 = 'https://www.brown.edu/about/administration/corporation/1900s'
    c18 = 'https://www.brown.edu/about/administration/corporation/1800s'
    c17 = 'https://www.brown.edu/about/administration/corporation/1700s'
    years20 = brown_get_century(c20, years)
    years19 = brown_get_century(c19, years20)
    years18 = brown_get_century(c18, years19)
    years17 = brown_get_century(c17, years18)

    # strip names and fix Jr. cases
    years = years17
    for year in years:
        fixed_names = []
        names = years[year]
        for name in names:
            name = name.strip().encode('utf8')
            end = name.find('(')
            if end is not -1:
                name = name[0:end]
            comma = name.find(', ')
            jr = name.find('Jr.')
            if comma is not -1 and jr is -1:
                names = name.split(', ')
                name = names[1].strip() + ' ' + names[0].strip()
            elif comma is not -1 and jr is not -1:
                names = name.split(', ')
                name = names[1].strip() + ' ' + names[0].strip() + ' Jr.'
            fixed_names.append(name)
        years[year] = fixed_names
    return years

# gets data from each individual Brown page
def brown_get_century(url, years):
    r = requests.get(url)
    data = r.text
    soup = bs(data, 'html.parser')

    header = True
    for row in soup.findAll('tr'):
        if header:
            header = False
            continue

        # map all the name to its year
        cells = row.findAll('td')
        if len(cells) < 1:
            continue
        name = cells[2].text
        year = int(cells[0].text)
        if year in years:
            years[year].append(name)
        else:
            years[year] = [name]

    return years

if school == 'penn':
    honorees_by_year = penn()
elif school == 'harvard':
    honorees_by_year = harvard()
elif school == 'brown':
    honorees_by_year = brown()

# write out all data to a csv
with open('data/honorees_' + school + '.csv', 'wb') as output:
    honorees = csv.writer(output)

    for year in sorted(honorees_by_year):
        for name in honorees_by_year[year]:
            honorees.writerow([name, year])
