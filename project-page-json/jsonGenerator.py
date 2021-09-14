import csv
import json
import re

def make_json(csvFilePath, jsonFilePath):
     
    data = {}
    currSection = None
    currFields = None
    content = False

    for line in open(csvFilePath):
        line = line.rstrip()
        if line==len(line) * ',':
           continue
        newLine = list(csv.reader([line], delimiter=',', quotechar='"'))[0]

        isSection = re.search("^---.*---$", newLine[0])
        if isSection:
            currSection = newLine[0].replace('-', '').replace(' ', '_').lower()
            data[currSection] = []
            content = False

        if content:
            data[currSection].append({
                field: text for field, text in zip(currFields, newLine)
            })

        property = re.compile(".*:$")
        properties = list(filter(property.match, newLine))

        trimLine = newLine
        while "" in trimLine:
            trimLine.remove("")

        isProperties = len(trimLine) == len(properties) and len(trimLine) != 0
        if isProperties:
            properties = [s.replace(":", "").replace(" ", "_").lower() for s in properties]
            currFields = properties
            content = True

    #print(data)

    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps([data], indent=4))
    
csvFilePath = r'welcomeback2022.csv'
jsonFilePath = r'welcomeback2022.json'
 
# Call the make_json function
make_json(csvFilePath, jsonFilePath)
