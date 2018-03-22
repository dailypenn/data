var tasks = [
{"startDate":new Date("Mon Jan 01 00:00:00 EST 2018"),"endDate":new Date("Mon Dec 31 11:59:59 EST 2018"),"taskName":"Brown","status":"Brown"},
{"startDate":new Date("Mon Jan 01 00:00:00 EST 2018"),"endDate":new Date("Mon Dec 31 11:59:59 EST 2018"),"taskName":"Columbia","status":"Columbia"},
{"startDate":new Date("Mon Jan 01 00:00:00 EST 2018"),"endDate":new Date("Mon Dec 31 11:59:59 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("Mon Jan 01 00:00:00 EST 2018"),"endDate":new Date("Mon Dec 31 11:59:59 EST 2018"),"taskName":"Dartmouth","status":"Dartmouth"},
{"startDate":new Date("Mon Jan 01 00:00:00 EST 2018"),"endDate":new Date("Mon Dec 31 11:59:59 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("Mon Jan 01 00:00:00 EST 2018"),"endDate":new Date("Mon Dec 31 11:59:59 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Mon Jan 01 00:00:00 EST 2018"),"endDate":new Date("Mon Dec 31 11:59:59 EST 2018"),"taskName":"Princeton","status":"Princeton"},
{"startDate":new Date("Mon Jan 01 00:00:00 EST 2018"),"endDate":new Date("Mon Dec 31 11:59:59 EST 2018"),"taskName":"Yale","status":"Yale"}];

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