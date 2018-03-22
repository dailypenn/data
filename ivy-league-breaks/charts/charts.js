var winter = c3.generate({
  bindto: '#winter',
  data: {
      columns: [
        ['Days Off', 0, 20, 23, 24, 26, 32, 40, 41]
      ],
      type: 'bar',
      colors: {
        'Days Off': '#000000'
      },
      color: function(c, data) {
        var colors = ['#A51C30', '#01256E', '#EE7F2D', '#C4D8E2', '#00356B', '#4E3629', '#B31B1B', '#00693E'];
        if (data.index !== undefined) return colors[data.index];
        return c;
      }
  },
  axis: {
    x: {
      type: 'category',
      categories: ['Harvard', 'Penn', 'Princeton', 'Columbia',  'Yale', 'Brown', 'Cornell', 'Dartmouth']
    },
    y: {
      label: {
        text: 'Days Off',
        position: 'outer-middle'
      },
      tick: {
        //format: d3.format('$')
      }
    }
  },
  legend: {
    show: false
  }
});

var summer = c3.generate({
  bindto: '#summer',
  data: {
      columns: [
        ['Days Off', 0, 93, 98, 109, 109, 111, 112, 116]
      ],
      type: 'bar',
      colors: {
        'Days Off': '#000000'
      },
      color: function(c, data) {
        var colors = ['#A51C30', '#B31B1B', '#00693E', '#EE7F2D', '#4E3629', '#00356B', '#01256E', '#C4D8E2'];
        if (data.index !== undefined) return colors[data.index];
        return c;
      }
  },
  axis: {
    x: {
      type: 'category',
      categories: ['Harvard', 'Cornell', 'Dartmouth', 'Princeton', 'Brown', 'Yale', 'Penn', 'Columbia']
    },
    y: {
      label: {
        text: 'Days Off',
        position: 'outer-middle'
      },
      tick: {
        //format: d3.format('$')
      }
    }
  },
  legend: {
    show: false
  }
});