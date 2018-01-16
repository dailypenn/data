import sys, datetime, json, requests, csv

if len(sys.argv) is not 2:
    sys.exit('Please enter a single search query. Wrap it in quotes if it has spaces!')

query = sys.argv[1]
url = 'https://factba.se/json/json-20170612.php'

# get results from the date Trump announced his candidacy to today
page = 1
params = dict(
    q=query,
    startdate='2015-06-16',
    enddate=datetime.date.today(),
    l=200,
    p=page
)

r = requests.get(url, params)
results = json.loads(r.text)
data = results['combo']['data']
num = results['combo']['filtered']

# go through all pages if there are more than 200 results
while num > 200:
    page += 1
    params = dict(
        q=query,
        startdate='2015-06-16',
        enddate=datetime.date.today(),
        l=200,
        p=page
    )
    r = requests.get(url, params)
    results = json.loads(r.text)
    data.extend(results['combo']['data'])
    num -= 200

with open(query.replace(' ', '_') + '_mentions.csv', 'wb') as output:
    csv = csv.writer(output)
    csv.writerow(['Text', 'Date', 'Location', 'Source', 'Type', 'URL',
    'Sentiment', 'Sentiment Score', 'Dominant Emotion', 'Anger Score',
    'Disgust Score', 'Joy Score', 'Fear Score', 'Sadness Score'])

    for d in data:
        has_emotion = 'emotion' in d and len(d['emotion']) > 0
        has_sentiment = 'sentiment' in d and len(d['sentiment']) > 0

        csv.writerow([d['text'].encode('utf8'), d['date'], d['place'],
        d['source'] if 'source' in d else 'Tweet' if d['record_type'] != 'Twitter' else 'Unknown',
        d['record_type'] if 'record_type' in d else d['type'], d['url'],
        d['sentiment'][0]['text'] if has_sentiment else '',
        d['sentiment'][0]['score'] if has_sentiment else '',
        d['emotion'][5]['text'] if has_emotion else '',
        d['emotion'][0]['score'] if has_emotion else '',
        d['emotion'][1]['score'] if has_emotion else '',
        d['emotion'][2]['score'] if has_emotion else '',
        d['emotion'][3]['score'] if has_emotion else '',
        d['emotion'][4]['score'] if has_emotion else ''])
