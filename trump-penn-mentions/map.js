var tooltip = d3.select('#map-tooltip').style("opacity", 0);
var width = d3.select('#map').node().clientWidth;
var mapRatio = .5;
var height = width * mapRatio;

// map data
var mapMentions = {
  1: {state: 'Alabama', mentions: 3},
  2: {state: 'Alaska', mentions: 0},
  4: {state: 'Arizona', mentions: 1},
  5: {state: 'Arkansas', mentions: 2},
  6: {state: 'California', mentions: 0},
  8: {state: 'Colorado', mentions: 0},
  9: {state: 'Connecticut', mentions: 1},
  11: {state: 'District of Columbia', mentions: 6},
  10: {state: 'Delaware', mentions: 0},
  12: {state: 'Florida', mentions: 7},
  13: {state: 'Georgia', mentions: 1},
  15: {state: 'Hawaii', mentions: 0},
  16: {state: 'Idaho', mentions: 0},
  17: {state: 'Illinois', mentions: 0},
  18: {state: 'Indiana', mentions: 0},
  19: {state: 'Iowa', mentions: 12},
  31: {state: 'Kansas', mentions: 0},
  21: {state: 'Kentucky', mentions: 0},
  22: {state: 'Louisiana', mentions: 0},
  23: {state: 'Maine', mentions: 0},
  30: {state: 'Montana', mentions: 0},
  20: {state: 'Nebraska', mentions: 0},
  32: {state: 'Nevada', mentions: 0},
  33: {state: 'New Hampshire', mentions: 1},
  34: {state: 'New Jersey', mentions: 0},
  35: {state: 'New Mexico', mentions: 0},
  36: {state: 'New York', mentions: 12},
  37: {state: 'North Carolina', mentions: 5},
  38: {state: 'North Dakota', mentions: 0},
  39: {state: 'Ohio', mentions: 0},
  40: {state: 'Oklahoma', mentions: 2},
  41: {state: 'Oregon', mentions: 0},
  24: {state: 'Maryland', mentions: 1},
  25: {state: 'Massachusetts', mentions: 0},
  26: {state: 'Michigan', mentions: 2},
  27: {state: 'Minnesota', mentions: 0},
  28: {state: 'Mississippi', mentions: 0},
  29: {state: 'Missouri', mentions: 0},
  42: {state: 'Pennsylvania', mentions: 6},
  44: {state: 'Rhode Island', mentions: 0},
  45: {state: 'South Carolina', mentions: 10},
  46: {state: 'South Dakota', mentions: 0},
  47: {state: 'Tennessee', mentions: 2},
  48: {state: 'Texas', mentions: 0},
  49: {state: 'Utah', mentions: 2},
  50: {state: 'Vermont', mentions: 0},
  51: {state: 'Virginia', mentions: 7},
  53: {state: 'Washington', mentions: 0},
  54: {state: 'West Virginia', mentions: 0},
  55: {state: 'Wisconsin', mentions: 3},
  56: {state: 'Wyoming', mentions: 0}
}

// draw paths from projection
var projection = d3.geo.albersUsa()
    .scale(width)
    .translate([width / 2, height / 2]);
var path = d3.geo.path().projection(projection);

// add svg to page
var map = d3.select('#map').append('svg')
  .style('height', height + 'px')
  .style('width', width + 'px');

// load files
queue().defer(d3.json, 'us.json').await(ready);

// handle tooltips
d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

d3.selection.prototype.moveToBack = function() {
  return this.each(function() {
  var firstChild = this.parentNode.firstChild;
    if (firstChild) {
      this.parentNode.insertBefore(this, firstChild);
    }
  });
};

function ready(error, us) {
  if (error) throw error;

  // associate state IDs with mention values
  var valuesByID = {};
  for (var i in mapMentions) {
    valuesByID[i] = mapMentions[i].mentions;
  }

  // associate state IDs with state name
  var stateByID = {};
  for (var i in mapMentions) {
    stateByID[i] = mapMentions[i].state;
  }

  // add states
  map.append('g')
    .attr('class', 'states')
    .selectAll('path')
    .data(topojson.feature(us, us.objects.states).features)
    .enter().append('path')
    .attr('d', path)
    // color and outline states
    .attr('fill', function(d) { return d3.interpolate('#FFF', '#AA1E22')(valuesByID[d.id] / 12); })
    .style('stroke', '#000')
    .style('stroke-width', 0.5)
    // handle tooltip hovering
    .on('mouseover', function(d) {
      var sel = d3.select(this);
      sel.moveToFront();
      d3.select(this).transition().duration(300).style('opacity', 0.8);
      tooltip.transition().duration(300).style('opacity', 1)
      tooltip.text(stateByID[d.id] + ': '+ valuesByID[d.id] + (valuesByID[d.id] != 1 ? ' mentions' : ' mention'))
        .style('left', (d3.event.pageX) + 'px')
        .style('top', (d3.event.pageY - 10) + 'px');
    })
    .on('mouseout', function() {
      var sel = d3.select(this);
      sel.moveToBack();
      d3.select(this).transition().duration(300).style('opacity', 1);
      tooltip.transition().duration(300).style('opacity', 0);
    });

  // make map responsive
  d3.select(window).on('resize', resize);
  function resize() {
    width = d3.select('#map').node().clientWidth;
    height = width * mapRatio;

    // update projection and path
    var proj = d3.geo.albersUsa()
      .scale(width)
      .translate([width / 2, height / 2]);
    path = d3.geo.path().projection(proj);

    // resize the map
    map.style('width', width + 'px').style('height', height + 'px');
    map.selectAll('path').attr('d', path);
  }
}
