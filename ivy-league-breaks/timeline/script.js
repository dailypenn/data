var tasks = [
{"startDate":new Date("Jan 01 00:00:00 EST 2018"),"endDate":new Date("Jan 24 00:00:00 EST 2018"),"taskName":"Brown","status":"Brown"},
{"startDate":new Date("Jan 17 00:00:00 EST 2018"),"endDate":new Date("Jan 21 00:00:00 EST 2018"),"taskName":"Brown","status":"Brown"},
{"startDate":new Date("Mar 24 00:00:00 EST 2018"),"endDate":new Date("Apr 02 00:00:00 EST 2018"),"taskName":"Brown","status":"Brown"},
{"startDate":new Date("Apr 27 00:00:00 EST 2018"),"endDate":new Date("May 09 00:00:00 EST 2018"),"taskName":"Brown","status":"Brown"},
{"startDate":new Date("May 19 00:00:00 EST 2018"),"endDate":new Date("Sep 05 00:00:00 EST 2018"),"taskName":"Brown","status":"Brown"},
{"startDate":new Date("Oct 08 00:00:00 EST 2018"),"endDate":new Date("Oct 09 00:00:00 EST 2018"),"taskName":"Brown","status":"Brown"},
{"startDate":new Date("Nov 21 00:00:00 EST 2018"),"endDate":new Date("Nov 26 00:00:00 EST 2018"),"taskName":"Brown","status":"Brown"},
{"startDate":new Date("Dec 08 00:00:00 EST 2018"),"endDate":new Date("Dec 13 00:00:00 EST 2018"),"taskName":"Brown","status":"Brown"},
{"startDate":new Date("Dec 22 00:00:00 EST 2018"),"endDate":new Date("Jan 01 00:00:00 EST 2019"),"taskName":"Brown","status":"Brown"},    
{"startDate":new Date("Jan 01 00:00:00 EST 2018"),"endDate":new Date("Jan 15 00:00:00 EST 2018"),"taskName":"Columbia","status":"Columbia"},
{"startDate":new Date("Mar 12 00:00:00 EST 2018"),"endDate":new Date("Mar 16 00:00:00 EST 2018"),"taskName":"Columbia","status":"Columbia"},
{"startDate":new Date("May 01 00:00:00 EST 2018"),"endDate":new Date("May 03 00:00:00 EST 2018"),"taskName":"Columbia","status":"Columbia"},
{"startDate":new Date("May 11 00:00:00 EST 2018"),"endDate":new Date("Sep 04 00:00:00 EST 2018"),"taskName":"Columbia","status":"Columbia"},
{"startDate":new Date("Nov 05 00:00:00 EST 2018"),"endDate":new Date("Nov 06 00:00:00 EST 2018"),"taskName":"Columbia","status":"Columbia"},
{"startDate":new Date("Nov 21 00:00:00 EST 2018"),"endDate":new Date("Nov 23 00:00:00 EST 2018"),"taskName":"Columbia","status":"Columbia"},
{"startDate":new Date("Dec 11 00:00:00 EST 2018"),"endDate":new Date("Dec 13 00:00:00 EST 2018"),"taskName":"Columbia","status":"Columbia"},
{"startDate":new Date("Dec 22 00:00:00 EST 2018"),"endDate":new Date("Jan 01 00:00:00 EST 2019"),"taskName":"Columbia","status":"Columbia"},    
{"startDate":new Date("Jan 01 00:00:00 EST 2018"),"endDate":new Date("Jan 23 00:00:00 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("Feb 17 00:00:00 EST 2018"),"endDate":new Date("Feb 21 00:00:00 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("Mar 31 00:00:00 EST 2018"),"endDate":new Date("Apr 08 00:00:00 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("May 10 00:00:00 EST 2018"),"endDate":new Date("May 13 00:00:00 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("May 18 00:00:00 EST 2018"),"endDate":new Date("May 19 00:00:00 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("May 22 00:00:00 EST 2018"),"endDate":new Date("Aug 22 00:00:00 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("Sep 03 00:00:00 EST 2018"),"endDate":new Date("Sep 04 00:00:00 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("Oct 06 00:00:00 EST 2018"),"endDate":new Date("Oct 10 00:00:00 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("Nov 21 00:00:00 EST 2018"),"endDate":new Date("Nov 26 00:00:00 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("Dec 02 00:00:00 EST 2018"),"endDate":new Date("Dec 05 00:00:00 EST 2018"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("Dec 16 00:00:00 EST 2018"),"endDate":new Date("Jan 01 00:00:00 EST 2019"),"taskName":"Cornell","status":"Cornell"},
{"startDate":new Date("Jan 01 00:00:00 EST 2018"),"endDate":new Date("Jan 03 00:00:00 EST 2018"),"taskName":"Dartmouth","status":"Dartmouth"},
{"startDate":new Date("Mar 07 00:00:00 EST 2018"),"endDate":new Date("Mar 09 00:00:00 EST 2018"),"taskName":"Dartmouth","status":"Dartmouth"},
{"startDate":new Date("Mar 14 00:00:00 EST 2018"),"endDate":new Date("Mar 26 00:00:00 EST 2018"),"taskName":"Dartmouth","status":"Dartmouth"},
{"startDate":new Date("May 28 00:00:00 EST 2018"),"endDate":new Date("May 29 00:00:00 EST 2018"),"taskName":"Dartmouth","status":"Dartmouth"},
{"startDate":new Date("May 31 00:00:00 EST 2018"),"endDate":new Date("Jun 01 00:00:00 EST 2018"),"taskName":"Dartmouth","status":"Dartmouth"},
{"startDate":new Date("Jun 06 00:00:00 EST 2018"),"endDate":new Date("Sep 12 00:00:00 EST 2018"),"taskName":"Dartmouth","status":"Dartmouth"},
{"startDate":new Date("Nov 14 00:00:00 EST 2018"),"endDate":new Date("Nov 16 00:00:00 EST 2018"),"taskName":"Dartmouth","status":"Dartmouth"},
{"startDate":new Date("Nov 22 00:00:00 EST 2018"),"endDate":new Date("Jan 01 00:00:00 EST 2019"),"taskName":"Dartmouth","status":"Dartmouth"},
{"startDate":new Date("Jan 01 00:00:00 EST 2018"),"endDate":new Date("jan 21 00:00:00 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("Feb 19 00:00:00 EST 2018"),"endDate":new Date("Feb 20 00:00:00 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("Mar 10 00:00:00 EST 2018"),"endDate":new Date("Mar 18 00:00:00 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("Apr 26 00:00:00 EST 2018"),"endDate":new Date("May 02 00:00:00 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("May 12 00:00:00 EST 2018"),"endDate":new Date("Sep 04 00:00:00 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("Oct 08 00:00:00 EST 2018"),"endDate":new Date("Oct 09 00:00:00 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("Nov 21 00:00:00 EST 2018"),"endDate":new Date("Nov 25 00:00:00 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("Dec 06 00:00:00 EST 2018"),"endDate":new Date("Dec 10 00:00:00 EST 2018"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("Dec 21 00:00:00 EST 2018"),"endDate":new Date("Jan 01 00:00:00 EST 2019"),"taskName":"Harvard","status":"Harvard"},
{"startDate":new Date("Jan 01 00:00:00 EST 2018"),"endDate":new Date("Jan 10 00:00:00 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Jan 15 00:00:00 EST 2018"),"endDate":new Date("Jan 16 00:00:00 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Mar 03 00:00:00 EST 2018"),"endDate":new Date("Mar 11 00:00:00 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Apr 26 00:00:00 EST 2018"),"endDate":new Date("Apr 27 00:00:00 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("May 09 00:00:00 EST 2018"),"endDate":new Date("Aug 28 00:00:00 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Sep 03 00:00:00 EST 2018"),"endDate":new Date("Sep 04 00:00:00 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Oct 04 00:00:00 EST 2018"),"endDate":new Date("Oct 08 00:00:00 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Nov 22 00:00:00 EST 2018"),"endDate":new Date("Nov 26 00:00:00 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Dec 11 00:00:00 EST 2018"),"endDate":new Date("Dec 13 00:00:00 EST 2018"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Dec 21 00:00:00 EST 2018"),"endDate":new Date("Jan 01 00:00:00 EST 2019"),"taskName":"Penn","status":"Penn"},
{"startDate":new Date("Jan 01 00:00:00 EST 2018"),"endDate":new Date("Feb 05 00:00:00 EST 2018"),"taskName":"Princeton","status":"Princeton"},
{"startDate":new Date("Mar 17 00:00:00 EST 2018"),"endDate":new Date("Mar 26 00:00:00 EST 2018"),"taskName":"Princeton","status":"Princeton"},
{"startDate":new Date("May 07 00:00:00 EST 2018"),"endDate":new Date("May 15 00:00:00 EST 2018"),"taskName":"Princeton","status":"Princeton"},
{"startDate":new Date("May 26 00:00:00 EST 2018"),"endDate":new Date("Sep 12 00:00:00 EST 2018"),"taskName":"Princeton","status":"Princeton"},
{"startDate":new Date("Oct 27 00:00:00 EST 2018"),"endDate":new Date("Nov 05 00:00:00 EST 2018"),"taskName":"Princeton","status":"Princeton"},
{"startDate":new Date("Nov 21 00:00:00 EST 2018"),"endDate":new Date("Nov 26 00:00:00 EST 2018"),"taskName":"Princeton","status":"Princeton"},
{"startDate":new Date("Dec 15 00:00:00 EST 2018"),"endDate":new Date("Jan 01 00:00:00 EST 2019"),"taskName":"Princeton","status":"Princeton"},
{"startDate":new Date("Jan 01 00:00:00 EST 2018"),"endDate":new Date("Jan 16 00:00:00 EST 2018"),"taskName":"Yale","status":"Yale"},
{"startDate":new Date("Mar 12 00:00:00 EST 2018"),"endDate":new Date("Mar 24 00:00:00 EST 2018"),"taskName":"Yale","status":"Yale"},
{"startDate":new Date("Apr 30 00:00:00 EST 2018"),"endDate":new Date("May 03 00:00:00 EST 2018"),"taskName":"Yale","status":"Yale"},
{"startDate":new Date("May 10 00:00:00 EST 2018"),"endDate":new Date("Aug 29 00:00:00 EST 2018"),"taskName":"Yale","status":"Yale"},
{"startDate":new Date("Sep 03 00:00:00 EST 2018"),"endDate":new Date("Sep 04 00:00:00 EST 2018"),"taskName":"Yale","status":"Yale"},
{"startDate":new Date("Oct 17 00:00:00 EST 2018"),"endDate":new Date("Oct 19 00:00:00 EST 2018"),"taskName":"Yale","status":"Yale"},
{"startDate":new Date("Nov 19 00:00:00 EST 2018"),"endDate":new Date("Nov 23 00:00:00 EST 2018"),"taskName":"Yale","status":"Yale"},
{"startDate":new Date("Dec 10 00:00:00 EST 2018"),"endDate":new Date("Dec 13 00:00:00 EST 2018"),"taskName":"Yale","status":"Yale"},
{"startDate":new Date("Dec 20 00:00:00 EST 2018"),"endDate":new Date("Jan 01 00:00:00 EST 2019"),"taskName":"Yale","status":"Yale"},
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

var format = "%b";

var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
gantt(tasks);


d3.selectAll('.gantt-chart rect')
  .on('mouseover', function (d) {
    hoverIn(this, d)
  })
  .on('mouseout', hoverOut)

function hoverIn (ctx, val) {

    // Get dimensions of your Gantt bar
    var dimBar = ctx.getBoundingClientRect()

    // Fill tooltip elements
    d3.select('#tooltip-name').text(val.taskName)
    d3.select('#tooltip-start').text(val.startDate.toDateString().substring(4, 10))
    d3.select('#tooltip-end').text(val.endDate.toDateString().substring(4, 10))

    // Get dimension of your tooltip
    var dimTip = document.getElementById('tooltip')
      .getBoundingClientRect()

    // Position your tooltip 
    d3.select('#tooltip')
      // Should be about the middle of your bar
      .style('left', (dimBar.left + dimBar.width / 2 - dimTip.width / 2)
        + 'px')
      // scrollY to catch any offset from scrolling
      .style('top', (window.scrollY + dimBar.top - dimTip.height / 2
        - 10) + 'px')
      .transition().duration(250)
        .style('opacity', 1)
}

function hoverOut () {
  d3.select('#tooltip')
    .transition().duration(250)
      .style('opacity', 0)
}