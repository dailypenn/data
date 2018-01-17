import csv, requests
from bs4 import BeautifulSoup as bs

states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI',
'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MT', 'NE', 'NV', 'NH', 'NJ',
'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO',
'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
states_mentions = dict.fromkeys(states, 0)
states_rallies = dict.fromkeys(states, 0)

# compile all mentions of Wharton, Ivy League, Penn, or 'good student' by state
with open('wharton_mentions.csv') as wharton, open('ivy_league_mentions.csv') as ivy, open('university_of_pennsylvania_mentions.csv') as penn, open('good_student_mentions.csv') as good:
    w = csv.reader(wharton)
    i = csv.reader(ivy)
    p = csv.reader(penn)
    g = csv.reader(good)

    for row in w:
        loc = row[2]
        if loc != '' and loc != 'Location':
            a = loc[len(loc) - 2:len(loc)]
            states_mentions[a] += 1

    for row in i:
        loc = row[2]
        if loc != '' and loc != 'Location':
            a = loc[len(loc) - 2:len(loc)]
            states_mentions[a] += 1

    for row in p:
        loc = row[2]
        if loc != '' and loc != 'Location':
            a = loc[len(loc) - 2:len(loc)]
            states_mentions[a] += 1

    for row in g:
        loc = row[2]
        if loc != '' and loc != 'Location':
            a = loc[len(loc) - 2:len(loc)]
            states_mentions[a] += 1

# write total mentions by state to a csv
with open('mentions_map.csv', 'wb') as output:
    mentions = csv.writer(output)
    mentions.writerow(['State', 'Mentions'])
    for state in states:
        mentions.writerow([state, states_mentions[state]])

# compile all of Trump's rallies by state
url = 'https://en.wikipedia.org/wiki/List_of_rallies_for_the_Donald_Trump_presidential_campaign,_2016'
r = requests.get(url)
soup = bs(r.text, 'html.parser')
table = soup.find_all('table', {'class': 'wikitable'})

# get primary rallies
for row in table[0].find_all('tr'):
    tds = row.find_all('td')
    if len(tds) > 0:
        state = tds[2].find_all('a')[0].contents[0]
        states_rallies[state] += 1

# get general election rallies
for row in table[1].find_all('tr'):
    tds = row.find_all('td')
    if len(tds) > 0:
        state = tds[2].find_all('a')[0].contents[0]
        states_rallies[state] += 1

percents = {}
for k in states_mentions.keys():
    percents[k] = None if states_rallies[k] is 0 else float(states_mentions[k]) / states_rallies[k]

with open('mentions_map_percents.csv', 'wb') as output:
    percents_output = csv.writer(output)
    percents_output.writerow(['State', 'Percent Mentions'])
    for state in states:
        percents_output.writerow([state, percents[state] if percents[state] is not None else 'No rallies'])
