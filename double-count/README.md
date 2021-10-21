# Setup
pip3 install pandas --user
pip3 install ...

# Double Counting Courses

The data in this folder contains information about courses that double count
across the sectors and foundations. Data prior to 2017s was created using a
crazy Excel macros, but the python file in this repo should be used for all future
data collection.

## TODO:
- [ ] Merge course-codes for duplicate courses in code
- [ ] Use PennLabs PennCourseReview API to get average score, difficulties

## Inspiration
This project was inspired by the now-defunct
[Double Count at UPenn](http://doublecountatupenn.weebly.com), which stopped
posting in Spring '15 when creator Sara Allan graduated.

## Relevant Links
#### Articles
- [Spring 2018](http://www.thedp.com/article/2017/10/here-are-the-courses-that-double-count-for-the-spring-of-2018)
- [Fall 2017](http://www.thedp.com/article/2017/03/double-count-classes-fall-2017)
- [Spring 2017](http://www.thedp.com/article/2016/10/double-count-classes-spring-2017)

#### Links
- [Policies Governing Double Counting Courses](https://www.college.upenn.edu/double-counting-courses)
- [PCR API Explorer](http://pennlabs.org/console/#depts)
- [PCR API Docs](https://github.com/dailypenn/data/blob/master/double-count/PCR_API_DOCS.md)
