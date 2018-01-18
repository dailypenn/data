var mapdata = [
  {code: 'AL', value: 3},
  {code: 'AK', value: 0},
  {code: 'AZ', value: 1},
  {code: 'AR', value: 2},
  {code: 'CA', value: 0},
  {code: 'CO', value: 0},
  {code: 'CT', value: 1},
  {code: 'DC', value: 6},
  {code: 'DE', value: 0},
  {code: 'FL', value: 7},
  {code: 'GA', value: 1},
  {code: 'HI', value: 0},
  {code: 'ID', value: 0},
  {code: 'IL', value: 0},
  {code: 'IN', value: 0},
  {code: 'IA', value: 12},
  {code: 'KS', value: 0},
  {code: 'KY', value: 0},
  {code: 'LA', value: 0},
  {code: 'ME', value: 0},
  {code: 'MT', value: 0},
  {code: 'NE', value: 0},
  {code: 'NV', value: 0},
  {code: 'NH', value: 1},
  {code: 'NJ', value: 0},
  {code: 'NM', value: 0},
  {code: 'NY', value: 12},
  {code: 'NC', value: 5},
  {code: 'ND', value: 0},
  {code: 'OH', value: 0},
  {code: 'OK', value: 2},
  {code: 'OR', value: 0},
  {code: 'MD', value: 1},
  {code: 'MA', value: 0},
  {code: 'MI', value: 2},
  {code: 'MN', value: 0},
  {code: 'MS', value: 0},
  {code: 'MO', value: 0},
  {code: 'PA', value: 6},
  {code: 'RI', value: 0},
  {code: 'SC', value: 10},
  {code: 'SD', value: 0},
  {code: 'TN', value: 2},
  {code: 'TX', value: 0},
  {code: 'UT', value: 2},
  {code: 'VT', value: 0},
  {code: 'VA', value: 7},
  {code: 'WA', value: 0},
  {code: 'WV', value: 0},
  {code: 'WI', value: 3},
  {code: 'WY', value: 0}
]

var usmap = Highcharts.mapChart('map', {
  chart: {
    spacing: [0,0,0,0]
  },
  title: {
    text: 'Trump\'s mentions of his education by state'
  },
  legend: {
    layout: 'horizontal',
    verticalAlign: 'top',
    margin: 5,
    padding: 0
  },
  colorAxis: {
    min: 0,
    max: 12,
    tickInterval: 4,
    type: 'linear',
    minColor: '#EEE',
    maxColor: '#AA1E22'
  },
  series: [{
    data: mapdata,
    mapData: Highcharts.maps['countries/us/us-all'],
    joinBy: ['postal-code', 'code'],
    dataLabels: {
      enabled: true,
      color: '#000',
      format: '{point.code}',
      allowOverlap: true,
      style: {
        textOutline: 'none',
        fontWeight: 'normal'
      }
    },
    name: 'Total Mentions',
    tooltip: {
      pointFormat: '{point.name}: {point.value} mentions'
    }
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 480
      },
      chartOptions: {
        series: [{
          dataLabels: {
            enabled: false
          }
        }]
      }
    }]
  }
});

function mapResize() {
  var mapWidth = d3.select('#map').node().clientWidth;
  if (mapWidth < 480) {
    usmap.setSize(mapWidth, mapWidth * 0.9);
  } else {
    usmap.setSize(mapWidth, mapWidth * 0.7);
  }
}

mapResize();
d3.select(window).on('resize', mapResize);
