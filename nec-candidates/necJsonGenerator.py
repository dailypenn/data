import csv
import json
import re

def make_json(csvFilePath, jsonFilePath, imagePath):
     
    data = {}

    csv_data = csv.reader(open(csvFilePath))
    csv_data.__next__() # skip first row
    for row in csv_data:
        # update for dif. spreadsheets!
        candidateData = {}
        candidateData['name']=row[2].strip()
        candidateData['introduction']=row[4].strip()
        platform_points = []
        for x in range(5,11):
            if(row[x]):
                platform_points.append(row[x].strip())
        candidateData['platform points']=platform_points

        imgFileName = row[2].strip().lower().replace(" ", "-") + ".jpeg";
        candidateData['image']={"src": imagePath + imgFileName}

        position = row[3].strip()
        print(position)
        if position.startswith("Class Board "):
            position = position[len("Class Board "):]
        elif position.startswith("UA "):
            position = position[len("UA "):]

        if (position in data):
            data[position].append(candidateData)
        else:
            data[position] = [candidateData]

        with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
            jsonf.write(json.dumps(data, indent=2))

csvFilePath = r'/Users/raunaqsingh/Developer/data/nec-candidates/Class_Board_Information_2025.csv'
jsonFilePath = r'/Users/raunaqsingh/Developer/data/nec-candidates/cb.json'
imagePath = "../../../images/2021/nec-fall/" 

# Call the make_json function
make_json(csvFilePath, jsonFilePath, imagePath)
