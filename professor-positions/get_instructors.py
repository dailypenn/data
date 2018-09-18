import sys, csv, requests
import penncoursereview as pcr

if len(sys.argv) is not 2:
    raise Exception('Please enter one department name.')

dept = sys.argv[1]
dept_list = pcr.Department(dept)

with open('data/' + dept + '_instructors.csv', 'w') as out:
    w = csv.writer(out)
    w.writerow(['Full Name', 'First Name', 'Last Name'])

    for ch in dept_list.coursehistories:
        # the individual API path for every course
        course_ID = ch.id
        course = pcr.Course(course_ID)

        # Get the (historical) course data from API
        path = "https://api.penncoursereview.com" + ch.path + "?token=public"
        response = requests.get(path)
        data = response.json()

        # Navigate to instructor name in the data
        result = data['result']
        courses = result['courses']

        for course in courses:
            if course['semester'] != '2017C':
                continue

            path = "https://api.penncoursereview.com" + course['path'] + "?token=public"
            response = requests.get(path)
            data = response.json()

            # Navigate to instructor name in the data
            result = data['result']
            sections = result['sections']

            for section in sections['values']:
                path = "https://api.penncoursereview.com" + section['path'] + "?token=public"
                response = requests.get(path)
                data = response.json()

                # Navigate to instructor name in the data
                result = data['result']
                instructors = result['instructors']

                for instructor in instructors:
                    w.writerow([instructor['name'], instructor['first_name'], instructor['last_name']])
