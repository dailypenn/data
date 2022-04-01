import csv
import json
import re
import gdown
import shutil
import os

def make_json(csvFilePath, jsonFilePath, imagePath):
     
    data = {}

    csv_data = csv.reader(open(csvFilePath))
    csv_data.__next__() # skip first row
    for row in csv_data:
        # update for dif. spreadsheets!
        candidateData = {}
        candidateData['name']=row[1].strip()
        candidateData['introduction']=row[2].strip()
        platform_points = []
        for x in range(3,9):
            if(row[x].strip()):
                platform_points.append(row[x].strip())
        candidateData['platform points']=platform_points

        # imgFileName = row[1].strip().lower().replace(" ", "-") + ".jpeg"
        imgFileName = row[1].strip().replace(" ", "_") + "_DPPhoto.jpeg"
        candidateData['image']={"src": imagePath + imgFileName}
        
        candidateData['instagram handle']=row[10].replace("@", "").strip()
        candidateData['facebook url']=row[9].strip()
        candidateData['campaign website']=row[11].strip()

        position = row[0].strip()
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
        
        output = imgFileName
        gdown.download(row[12].strip(), output, quiet=True, fuzzy=True)
        try:
            shutil.move(imgFileName, "candidate-images")
        except:
            try:
                os.remove(imgFileName)
            except:
                print("Error downloading image: " + imgFileName)

csvFilePath = r'/Users/raunaqsingh/Developer/data/nec-candidates/cb_25.csv'
jsonFilePath = r'/Users/raunaqsingh/Developer/data/nec-candidates/cb_25.json'
imagePath = "../../../images/2022/nec/"

# Call the make_json function
make_json(csvFilePath, jsonFilePath, imagePath)
