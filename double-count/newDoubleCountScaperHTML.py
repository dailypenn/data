from bs4 import BeautifulSoup as bs
import pandas as pd
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.common.by import By

courses_sectors = pd.DataFrame(columns=['course_name', 'course_code', 'sector'])
courses_foundations = pd.DataFrame(columns=['course_name', 'course_code', 'foundations'])

options = webdriver.ChromeOptions()
options.add_argument('--headless')
# Make sure to install ChromeDriver!
browser = webdriver.Chrome(options=options, executable_path='/Users/raunaqsingh/Developer/chromedriver')

# Change for current semester!
BASE_URL = "https://courses.upenn.edu/?srcdb=202310&course_attributes="

SECTORS = {
    "I: Society"                                 : "course_attributes_AUSO",
    "II: History and Tradition"                  : "course_attributes_AUHT",
    "III: Arts and Letters"                      : "course_attributes_AUAL",
    "IV: Humanities and Social Science"          : "course_attributes_AUHS",
    "V: Living World"                            : "course_attributes_AULW",
    "VI: Physical World"                         : "course_attributes_AUPW",
    "VII: Natural Sciences Across Disciplines"   : "course_attributes_AUNM",
}

FOUNDATIONS = {
    "Quantitative Data Analysis"       : "course_attributes_AUQD",
    "Formal Reasoning & Analysis"      : "course_attributes_AUFR",
    "Cross Cultural Analysis"          : "course_attributes_AUCC",
    "Cultural Diversity in the U.S."   : "course_attributes_AUCD"
}

def getData(url, req_name):
    global courses_sectors
    global courses_foundations
    global browser

    browser.get(url)
    WebDriverWait(browser, 5).until(ec.presence_of_element_located((By.CLASS_NAME, 'result__headline')))
    html = browser.page_source

    soup = bs(html, "html.parser")
    results = soup.find_all('span', class_='result__headline')

    for result in results:  # strip header row
        code = result.find('span', class_='result__code').string
        name = result.find('span', class_='result__title').string

        if req_name in SECTORS.keys():
            courses_sectors = courses_sectors.append({'course_name': name, 'course_code': code, 'sector': req_name}, ignore_index = True)
        else:
            courses_foundations = courses_foundations.append({'course_name': name, 'course_code': code, 'foundations': req_name}, ignore_index = True)



getData(BASE_URL + "course_attributes_AULG", "Language")

for name, querystr in SECTORS.items():
    print("doing ", name)
    getData(BASE_URL + querystr, name)

for name, querystr in FOUNDATIONS.items():
    print("doing ", name)
    getData(BASE_URL + querystr, name)

browser.quit()

def getFoundation(r):
    name = r['course_name']
    if not courses_foundations[courses_foundations['course_name'] == name].empty:
        r['Foundation'] = courses_foundations[courses_foundations['course_name'] == name].iloc[0]['foundations']
    return r

courses_sectors = courses_sectors.drop_duplicates()
courses_foundations = courses_foundations.drop_duplicates()
courses_combined = courses_sectors.apply(getFoundation, axis = 1)
courses_combined = courses_combined.dropna()
courses_combined = courses_combined.groupby('course_name').agg({'course_code': '<br>'.join, 'sector': 'first', 'Foundation': 'first'})
courses_combined = courses_combined.sort_values(['course_name']).reset_index()
courses_combined = courses_combined.rename(columns = {'course_name': 'Course Name', 'course_code': 'Course Code', 'sector': 'Sector'})

html_file_name = 'double_count_table_2023s.html'

with open(html_file_name, 'w+') as htmlfile:
    courses_combined.to_html(htmlfile, escape = False)

## DON'T FORGET TO CHANGE TABLE STYLE AND INSERT SCRIPTS AT THE BOTTOM OF HTML FILE (see previous tables)!

# <table id="doublecount" class="table table-striped compact" style="width:100%;font-size:16px;">

#<colgroup>
#     <col span="1" style="width: 2%;">
#     <col span="1" style="width: 40%;">
#     <col span="1" style="width: 18%;">
# </colgroup>

# <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
# <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
# <script type="text/javascript">
#   $(document).ready(function() {
#     $('#doublecount').DataTable({
#     	"order": [[ 0, "asc" ]]
# 	});
# } );
# </script>
# <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css"/>
# <style>
#   [type="search"] {
#    height: 28px;
# padding: 3px 12px;
# font-size: 14px;
# line-height: 1.428571429;
# color: #555;
# background-color: #fff;
# background-image: none;
# border: 1px solid #ccc;
# border-radius: 4px;
#   }
# </style>

# with open(html_file_name, 'r+') as htmlfile:
#     contents = htmlfile.read()
#     soup = bs(contents, 'lxml')
#     # print(soup.prettify())
#     soup.find('table')['id'] = 'doublecount'
#     soup.find('table')['class'] = 'table table-striped compact'
#     soup.find('table')['style'] = 'width:100%;font-size:16px;'
#     del soup.find('table')['border']
#     with open('double_count_footer.html', 'r') as htmlfooterfile:
#         footerContents = htmlfooterfile.read()
#         footerSoup = bs(footerContents, 'lxml')
#         for element in footerSoup.body:
#             print(element)
#             soup.append(element)
#     # htmlfile.write(soup.prettify())  
#     htmlfile.write(str(soup.find('table')))
