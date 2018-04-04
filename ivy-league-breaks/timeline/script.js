var tasks = [
{"startDate":new Date("Jan 01 00:00:00 EST 2018"),"endDate":new Date("Dec 31 11:59:59 EST 2018"),"taskName":"Brown","status":"Brown"},
{"startDate":new Date("Jan 01 00:00:00 EST 2018"),"endDate":new Date("Jan 15 11:59:59 EST 2018"),"taskName":"Columbia","status":"Columbia"},
{"startDate":new Date("Mar 12 00:00:00 EST 2018"),"endDate":new Date("Mar 16 11:59:59 EST 2018"),"taskName":"Columbia","status":"Columbia"},
{"startDate":new Date("May 01 00:00:00 EST 2018"),"endDate":new Date("May 03 11:59:59 EST 2018"),"taskName":"Columbia","status":"Columbia"},
{"startDate":new Date("May 11 00:00:00 EST 2018"),"endDate":new Date("Sep 04 11:59:59 EST 2018"),"taskName":"Columbia","status":"Columbia"},
{"startDate":new Date("Nov 05 00:00:00 EST 2018"),"endDate":new Date("Nov 06 11:59:59 EST 2018"),"taskName":"Columbia","status":"Columbia"},
{"startDate":new Date("Nov 21 00:00:00 EST 2018"),"endDate":new Date("Nov 23 11:59:59 EST 2018"),"taskName":"Columbia","status":"Columbia"},
{"startDate":new Date("Dec 11 00:00:00 EST 2018"),"endDate":new Date("Dec 13 11:59:59 EST 2018"),"taskName":"Columbia","status":"Columbia"},
{"startDate":new Date("Dec 22 00:00:00 EST 2018"),"endDate":new Date("Dec 31 11:59:59 EST 2018"),"taskName":"Columbia","status":"Columbia"},    
{"startDate":new Date("Jan 01 00:00:00 EST 2018"),"endDate":new Date("Jan 23 11:59:59 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("Feb 17 00:00:00 EST 2018"),"endDate":new Date("Feb 21 11:59:59 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("Mar 31 00:00:00 EST 2018"),"endDate":new Date("Apr 08 11:59:59 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("May 10 00:00:00 EST 2018"),"endDate":new Date("May 13 11:59:59 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("May 18 00:00:00 EST 2018"),"endDate":new Date("May 19 11:59:59 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("May 22 00:00:00 EST 2018"),"endDate":new Date("Aug 22 11:59:59 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("Sep 03 00:00:00 EST 2018"),"endDate":new Date("Sep 04 00:00:00 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("Oct 06 00:00:00 EST 2018"),"endDate":new Date("Oct 10 11:59:59 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("Nov 21 00:00:00 EST 2018"),"endDate":new Date("Nov 26 00:00:00 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("Dec 02 00:00:00 EST 2018"),"endDate":new Date("Dec 05 11:59:59 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("Dec 16 00:00:00 EST 2018"),"endDate":new Date("Dec 31 11:59:59 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("Jan 01 00:00:00 EST 2018"),"endDate":new Date("Jan 03 11:59:59 EST 2018"),"taskName":"Dartmouth","status":"Dartmouth"},
{"startDate":new Date("Mar 07 00:00:00 EST 2018"),"endDate":new Date("Mar 09 11:59:59 EST 2018"),"taskName":"Dartmouth","status":"Dartmouth"},
{"startDate":new Date("Mar 14 00:00:00 EST 2018"),"endDate":new Date("Mar 26 11:59:59 EST 2018"),"taskName":"Dartmouth","status":"Dartmouth"},
{"startDate":new Date("May 28 00:00:00 EST 2018"),"endDate":new Date("May 29 11:59:59 EST 2018"),"taskName":"Dartmouth","status":"Dartmouth"},
{"startDate":new Date("May 31 00:00:00 EST 2018"),"endDate":new Date("Jun 01 11:59:59 EST 2018"),"taskName":"Dartmouth","status":"Dartmouth"},
{"startDate":new Date("Jun 06 00:00:00 EST 2018"),"endDate":new Date("Sep 12 11:59:59 EST 2018"),"taskName":"Dartmouth","status":"Dartmouth"},
{"startDate":new Date("Nov 14 00:00:00 EST 2018"),"endDate":new Date("Nov 16 11:59:59 EST 2018"),"taskName":"Dartmouth","status":"Dartmouth"},
{"startDate":new Date("Nov 22 00:00:00 EST 2018"),"endDate":new Date("Dec 31 11:59:59 EST 2018"),"taskName":"Dartmouth","status":"Dartmouth"},
{"startDate":new Date("Jan 01 00:00:00 EST 2018"),"endDate":new Date("jan 21 11:59:59 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("Feb 19 00:00:00 EST 2018"),"endDate":new Date("Feb 20 11:59:59 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("Mar 10 00:00:00 EST 2018"),"endDate":new Date("Mar 18 11:59:59 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("Apr 26 00:00:00 EST 2018"),"endDate":new Date("May 02 11:59:59 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("May 12 00:00:00 EST 2018"),"endDate":new Date("Sep 04 11:59:59 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("Oct 08 00:00:00 EST 2018"),"endDate":new Date("Oct 09 11:59:59 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("Nov 21 00:00:00 EST 2018"),"endDate":new Date("Nov 25 11:59:59 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("Dec 06 00:00:00 EST 2018"),"endDate":new Date("Dec 10 11:59:59 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("Dec 21 00:00:00 EST 2018"),"endDate":new Date("Dec 31 11:59:59 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("Jan 01 00:00:00 EST 2018"),"endDate":new Date("Jan 10 11:59:59 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Jan 15 00:00:00 EST 2018"),"endDate":new Date("Jan 16 11:59:59 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Mar 03 00:00:00 EST 2018"),"endDate":new Date("Mar 11 11:59:59 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Apr 26 00:00:00 EST 2018"),"endDate":new Date("Apr 27 11:59:59 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("May 09 00:00:00 EST 2018"),"endDate":new Date("Aug 28 11:59:59 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Sep 03 00:00:00 EST 2018"),"endDate":new Date("Sep 04 11:59:59 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Oct 04 00:00:00 EST 2018"),"endDate":new Date("Oct 08 11:59:59 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Nov 22 00:00:00 EST 2018"),"endDate":new Date("Nov 26 11:59:59 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Dec 11 00:00:00 EST 2018"),"endDate":new Date("Dec 13 11:59:59 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Dec 21 00:00:00 EST 2018"),"endDate":new Date("Dec 31 11:59:59 EST 2018"),"taskName":"Penn","status":"Penn"},
    
{"startDate":new Date("Jan 01 00:00:00 EST 2018"),"endDate":new Date("Feb 05 11:59:59 EST 2018"),"taskName":"Princeton","status":"Princeton"},
{"startDate":new Date("Mar 17 00:00:00 EST 2018"),"endDate":new Date("Mar 26 11:59:59 EST 2018"),"taskName":"Princeton","status":"Princeton"},
{"startDate":new Date("May 07 00:00:00 EST 2018"),"endDate":new Date("May 15 11:59:59 EST 2018"),"taskName":"Princeton","status":"Princeton"},
{"startDate":new Date("May 26 00:00:00 EST 2018"),"endDate":new Date("Sep 12 11:59:59 EST 2018"),"taskName":"Princeton","status":"Princeton"},
{"startDate":new Date("Oct 27 00:00:00 EST 2018"),"endDate":new Date("Nov 05 11:59:59 EST 2018"),"taskName":"Princeton","status":"Princeton"},
{"startDate":new Date("Nov 21 00:00:00 EST 2018"),"endDate":new Date("Nov 26 11:59:59 EST 2018"),"taskName":"Princeton","status":"Princeton"},
{"startDate":new Date("Dec 15 00:00:00 EST 2018"),"endDate":new Date("Dec 31 11:59:59 EST 2018"),"taskName":"Princeton","status":"Princeton"},
{"startDate":new Date("Jan 01 00:00:00 EST 2018"),"endDate":new Date("Jan 16 11:59:59 EST 2018"),"taskName":"Yale","status":"Yale"},
{"startDate":new Date("Mar 12 00:00:00 EST 2018"),"endDate":new Date("Mar 24 11:59:59 EST 2018"),"taskName":"Yale","status":"Yale"},
{"startDate":new Date("Apr 30 00:00:00 EST 2018"),"endDate":new Date("May 3 11:59:59 EST 2018"),"taskName":"Yale","status":"Yale"},
{"startDate":new Date("May 10 00:00:00 EST 2018"),"endDate":new Date("Aug 29 11:59:59 EST 2018"),"taskName":"Yale","status":"Yale"},
{"startDate":new Date("Sep 03 00:00:00 EST 2018"),"endDate":new Date("Sep 04 11:59:59 EST 2018"),"taskName":"Yale","status":"Yale"},
{"startDate":new Date("Oct 17 00:00:00 EST 2018"),"endDate":new Date("Oct 19 11:59:59 EST 2018"),"taskName":"Yale","status":"Yale"},
{"startDate":new Date("Nov 19 00:00:00 EST 2018"),"endDate":new Date("Nov 23 11:59:59 EST 2018"),"taskName":"Yale","status":"Yale"},
{"startDate":new Date("Dec 10 00:00:00 EST 2018"),"endDate":new Date("Dec 13 11:59:59 EST 2018"),"taskName":"Yale","status":"Yale"},
{"startDate":new Date("Dec 20 00:00:00 EST 2018"),"endDate":new Date("Dec 31 11:59:59 EST 2018"),"taskName":"Yale","status":"Yale"},
];

var taskStatus = {
    "Brown" : "brown",
    "Columbia": "columbia",
    "Cornell": "cornell",
    "Dartmouth": "dartmouth",
    "Harvard": "harvard",
    "Penn": "penn",
    "Princeton": "princeton",
    "Yale": "yale"
};

var taskNames = ["Brown", "Columbia", "Cornell", "Dartmouth", "Harvard", "Penn", "Princeton", "Yale"];

tasks.sort(function(a, b) {
    return a.endDate - b.endDate;
});
var maxDate = tasks[tasks.length - 1].endDate;
tasks.sort(function(a, b) {
    return a.startDate - b.startDate;
});
var minDate = tasks[0].startDate;

var format = "%H:%M";

var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
gantt(tasks);