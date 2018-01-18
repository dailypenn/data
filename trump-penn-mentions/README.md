# Trump's Mentions of Penn

This folder contains the data and code behind the article: [How many times has Trump mentioned his Wharton education? We crunched the numbers.](http://www.thedp.com/article/2018/01/trump-penn-wharton-data-education-times-ivy-league-business-finance-philadelphia-campaign)

## Read Trump's Direct Quotes

To read all of Trump's mentions of his education at Penn, follow the links below. Each file also contains when and where he said the term, and includes Factbase's sentiment and emotion analysis.

Phrase                       | File
-----------------------------|------------
Wharton                      | [wharton_mentions.csv](data/wharton_mentions.csv)
University of Pennsylvania   | [university_of_pennsylvania_mentions.csv](data/university_of_pennsylvania_mentions.csv)
Ivy League                   | [ivy_league_mentions.csv](data/ivy_league_mentions.csv)
good/great/excellent student | [good_student_mentions.csv](data/good_student_mentions.csv)

## How It Works

### Data Analysis

We utilized [Factbase's archive](https://factba.se/trump) of Trump's public commentary. We wrote [scraper.py](scraper.py) to scrape their JSON endpoint for given terms (we used `Wharton`, `University of Pennsylvania`, `Ivy League`, and `good/great/excellent student`). The scraper also pulls Factbase's information on sentiment and emotion of the text, though this data was not used in our project.

To generate the data for our timeseries graph, we wrote [over_time.py](over_time.py), which generates the range of dates from when Trump announced his candidacy to January 16, 2018, the day the data was gathered. It then maps each date to the number of mentions of the inputted phrase on that day.

Finally, [map.py](map.py) aggregates all four of our terms and maps them to the state they occurred in. We also pulled the number of rallies held in each state, though we ended up not using this data, as it didn't reflect a full list of Trump's speaking engagements.

### Visualization

The visualizations for this project were made with [C3.js](http://c3js.org) and [Highcharts](https://www.highcharts.com). The first two graphs (of total mentions and mentions over time) use C3. The code can be found in [charts.js](charts.js). The map Highcharts' Highmaps library. Its code can be found in [map.js](map.js).
