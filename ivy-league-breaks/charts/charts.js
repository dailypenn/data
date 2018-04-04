var winter = c3.generate({
  bindto: '#winter',
  data: {
      columns: [
        ['Days Off', 20, 23, 24, 26, 32, 32, 40, 41]
      ],
      type: 'bar',
      colors: {
        'Days Off': '#000000'
      },
      color: function(c, data) {
        var colors = ['#01256E', '#EE7F2D', '#C4D8E2', '#00356B', '#A51C30', '#4E3629', '#B31B1B', '#00693E'];
        if (data.index !== undefined) return colors[data.index];
        return c;
      }
  },
  axis: {
    x: {
      type: 'category',
      categories: ['Penn', 'Princeton', 'Columbia',  'Yale', 'Harvard', 'Brown', 'Cornell', 'Dartmouth']
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
        ['Days Off', 93, 98, 109, 109, 111, 112, 115, 116]
      ],
      type: 'bar',
      colors: {
        'Days Off': '#000000'
      },
      color: function(c, data) {
        var colors = ['#B31B1B', '#00693E', '#EE7F2D', '#4E3629', '#00356B', '#01256E', '#A51C30', '#C4D8E2'];
        if (data.index !== undefined) return colors[data.index];
        return c;
      }
  },
  axis: {
    x: {
      type: 'category',
      categories: ['Cornell', 'Dartmouth', 'Princeton', 'Brown', 'Yale', 'Penn', 'Harvard', 'Columbia']
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