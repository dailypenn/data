# Trump's Mentions of Penn

This folder contains the data and code behind the article: [How many times has Trump mentioned his Wharton education? We crunched the numbers.](http://www.thedp.com/article/2018/01/trump-penn-wharton-data-education-times-ivy-league-business-finance-philadelphia-campaign)

## Data Analysis

We utilized [Factbase's archive](https://factba.se/trump) of Trump's public commentary. We wrote [scraper.py](scraper.py) to scrape their JSON endpoint for given terms (we used `Wharton`, `University of Pennsylvania`, `Ivy League`, and `good/great/excellent student`). The scraper also pulls Factbase's information on sentiment and emotion of the text, though this data was not used in our project.

To generate the data for our timeseries graph, we wrote [over_time.py](over_time.py), which generates the range of dates from when Trump announced his candidacy to January 16, 2018, the day the data was gathered. It then maps each date to the number of mentions of the inputted phrase on that day.

Finally, [map.py](map.py) aggregates all four of our terms and maps them to the state they occurred in. We also pulled the number of rallies held in each state, though we ended up not using this data, as it didn't reflect a full list of Trump's speaking engagements.

## Visualization

The visualizations for this project were made with [D3.js](https://d3js.org) and [C3.js](http://c3js.org). The first two graphs (of total mentions and mentions over time) use C3. The code can be found in [charts.js](charts.js). The map uses D3 and a JSON file to build the SVG of the United States. Its code can be found in [map.js](map.js).
