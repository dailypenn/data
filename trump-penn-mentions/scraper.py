import sys, datetime, json, requests, csv

if len(sys.argv) is not 2:
    sys.exit('Please enter a single search query. Wrap it in quotes if it has spaces!')

query = sys.argv[1]
url = 'https://factba.se/json/json-20170612.php'

# get results from the date Trump announced his candidacy to today
params = dict(
    q=query,
    startdate='2015-06-16',
    enddate=datetime.date.today(),
    l=200,
    p=1
)

r = requests.get(url, params)
results = json.loads(r.text)
data = results['combo']['data']

with open(query.replace(' ', '_') + '_mentions.csv', 'wb') as output:
    csv = csv.writer(output)
    csv.writerow(['Text', 'Date', 'Location', 'Source', 'Type', 'URL',
    'Sentiment', 'Sentiment Score', 'Dominant Emotion', 'Anger Score',
    'Disgust Score', 'Joy Score', 'Fear Score', 'Sadness Score'])

    for d in data:
        has_emotion = len(d['emotion']) > 0
        has_sentiment = len(d['sentiment']) > 0

        csv.writerow([d['text'].encode('utf8'), d['date'], d['place'],
        d['source'] if d['record_type'] != 'Twitter' else 'Tweet',
        d['record_type'], d['url'],
        d['sentiment'][0]['text'] if has_sentiment else '',
        d['sentiment'][0]['score'] if has_sentiment else '',
        d['emotion'][5]['text'] if has_emotion else '',
        d['emotion'][0]['score'] if has_emotion else '',
        d['emotion'][1]['score'] if has_emotion else '',
        d['emotion'][2]['score'] if has_emotion else '',
        d['emotion'][3]['score'] if has_emotion else '',
        d['emotion'][4]['score'] if has_emotion else ''])
