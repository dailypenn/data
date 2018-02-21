var fees = c3.generate({
  bindto: '#fees',
  data: {
      columns: [
        ['Application Fee', 65, 75, 75, 75, 80, 80, 80, 85, 90]
      ],
      type: 'bar',
      colors: {
        'Application Fee': '#000000'
      },
      color: function(c, data) {
        var colors = ['#EE7F2D', '#4E3629', '#A51C30', '#01256E', '#B31B1B', '#00693E', '#00356B', '#C4D8E2', '#8C1515'];
        if (data.index !== undefined) return colors[data.index];
        return c;
      }
  },
  axis: {
    x: {
      type: 'category',
      categories: ['Princeton', 'Brown', 'Harvard', 'Penn', 'Cornell', 'Dartmouth', 'Yale', 'Columbia', 'Stanford']
    },
    y: {
      label: {
        text: 'Application Fee',
        position: 'outer-middle'
      },
      tick: {
        format: d3.format('$')
      }
    }
  },
  legend: {
    show: false
  },
  title: {
    text: 'College application fees for Penn and peer schools'
  }
});

var penn = c3.generate({
  bindto: '#penn',
  data: {
    columns: [
      ['Revenue', 3029550, 1817730]
    ],
    type: 'bar',
    colors: {
      'Revenue': '#000000'
    },
    color: function(c, data) {
      var colors = ['#95001a', '#01256e'];
      if (data.index !== undefined) return colors[data.index];
      return c;
    }
  },
  axis: {
    x: {
      type: 'category',
      categories: ['Total revenue with no fees waived', 'Revenue with 40% of fees waived']
    },
    y: {
      label: {
        text: 'Revenue',
        position: 'outer-middle'
      },
      tick: {
        format: d3.format('$s')
      }
    }
  },
  tooltip: {
    format: {
      value: function (value, ratio, id) {
        var format = d3.format('$,.');
        return format(value);
      }
    }
  },
  legend: {
    show: false
  },
  title: {
    text: 'Penn\'s revenue from application fees'
  }
});

var revenue = c3.generate({
  bindto: '#revenue',
  data: {
    columns: [
      ['Revenue', 1602720, 2018640, 2454300, 2632000, 2962950, 3029550, 3178065, 3763040, 3966570]
    ],
    type: 'bar',
    colors: {
      'Revenue': '#000000',
    },
    color: function(c, data) {
      var colors = ['#00693E', '#EE7F2D', '#4E3629', '#00356B', '#A51C30', '#01256E', '#C4D8E2', '#B31B1B', '#8C1515'];
      if (data.index !== undefined) return colors[data.index];
      return c;
    }
  },
  axis: {
    x: {
      type: 'category',
      categories: ['Dartmouth', 'Princeton', 'Brown', 'Yale', 'Harvard', 'Penn', 'Columbia', 'Cornell', 'Stanford']
    },
    y: {
      label: {
        text: 'Revenue',
        position: 'outer-middle'
      },
      tick: {
        format: d3.format('$s')
      }
    }
  },
  tooltip: {
    format: {
      value: function (value, ratio, id) {
        var format = d3.format('$,.');
        return format(value);
      }
    }
  },
  legend: {
    show: false
  },
  title: {
    text: 'Total revenue from application fees (waivers excluded)'
  }
});
