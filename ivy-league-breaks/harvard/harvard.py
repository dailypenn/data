import requests
from bs4 import BeautifulSoup
import csv

url = 'https://registrar.fas.harvard.edu/five-year-calendar'
response = requests.get(url)
html = response.content

soup = BeautifulSoup(html, "html.parser")
tables = soup.findAll('table')

fall = tables[0]
winter = tables[1]
spring = tables[3]

list_of_rows_fall = []
for row in fall.findAll('tr'):
    list_of_cells_fall = []
    for cell in row.findAll('td'):
        text = cell.text.replace('&nbsp;', '')
        list_of_cells_fall.append(text)
    list_of_rows_fall.append(list_of_cells_fall)

list_of_rows_winter = []
for row in winter.findAll('tr'):
    list_of_cells_winter = []
    for cell in row.findAll('td'):
        text = cell.text.replace('&nbsp;', '')
        list_of_cells_winter.append(text)
    list_of_rows_winter.append(list_of_cells_winter)

list_of_rows_spring = []
for row in spring.findAll('tr'):
    list_of_cells_spring = []
    for cell in row.findAll('td'):
        text = cell.text.replace('&nbsp;', '')
        list_of_cells_spring.append(text)
    list_of_rows_spring.append(list_of_cells_spring)

with open("harvard.csv","w+") as my_csv:
    csvWriter = csv.writer(my_csv,delimiter=',')
    csvWriter.writerows(list_of_rows_fall)
    csvWriter.writerows(list_of_rows_winter)
    csvWriter.writerows(list_of_rows_spring)
