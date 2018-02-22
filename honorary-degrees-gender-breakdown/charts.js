var pennTime = c3.generate({
  bindto: '#penn-time',
  data: {
    x: 'x',
    xFormat: '%Y',
    columns: [
      ['x','1894','1895','1896','1897','1898','1899','1900','1901','1902','1903','1904','1905','1906','1907','1908','1909','1910','1911','1912','1913','1914','1915','1916','1917','1918','1919','1920','1921','1922','1923','1924','1925','1926','1927','1928','1929','1930','1931','1932','1933','1934','1935','1936','1937','1938','1939',
      '1940','1941','1942','1943','1944','1945','1946','1947','1948','1949','1950','1951','1952','1953','1954','1955','1956','1957','1958','1959','1960','1961','1962','1963','1964','1965','1966','1967','1968','1969','1970','1971','1972','1973','1974','1975','1976','1977','1978','1979','1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009',
      '2010','2011','2012','2013','2014','2015','2016','2017'],
      ['Percent female',
      0.07142857142857142,0.0,0.0,0.0,0.25,0.0,0.0,0.0,0.07142857142857142,0.0,0.0,0.0,0.0,0.0,0.1111111111111111,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.125,0.0,0.0,0.0,0.0,0.08333333333333333,0.0,0.0,0.04,0.0,0.0,0.0,0.0,0.0,0.0,0.10526315789473684,0.09090909090909091,0.05263157894736842,0.1111111111111111,0.08333333333333333,0.0,0.13333333333333333,0.07142857142857142,0.08333333333333333,0.03571428571428571,0.14285714285714285,0.07142857142857142,0.16666666666666666,0.0,0.13333333333333333,
      0.0,0.0,0.1,0.0,0.125,0.18181818181818182,0.0,0.125,0.0,0.2222222222222222,0.06666666666666667,0.058823529411764705,0.0,0.2,0.0,0.0,0.0,0.0,0.15384615384615385,0.0,0.0,0.09090909090909091,0.0,0.1111111111111111,0.125,0.08333333333333333,0.16666666666666666,0.14285714285714285,0.16666666666666666,0.15,0.1,0.2857142857142857,0.06666666666666667,0.25,0.1111111111111111,0.2,0.08333333333333333,0.2,0.19230769230769232,0.36363636363636365,0.16666666666666666,0.25,0.3333333333333333,0.4,
      0.26666666666666666,0.25,0.2,0.5,0.5714285714285714,0.14285714285714285,0.25,0.25,0.14285714285714285,0.5,0.16666666666666666,0.3333333333333333,0.2,0.3333333333333333,0.3333333333333333,0.3333333333333333,0.5,0.7142857142857143,0.2857142857142857,0.3333333333333333,0.2857142857142857,0.42857142857142855,0.2857142857142857,0.375,0.42857142857142855,0.5714285714285714,0.5,0.5714285714285714],
      ['Percent male',
      0.9285714285714286,1.0,1.0,1.0,0.75,1.0,1.0,1.0,0.9285714285714286,1.0,1.0,1.0,1.0,1.0,0.8888888888888888,1.0,1.0,1.0,1.0,1.0,1.0,1.0,0.875,1.0,1.0,1.0,1.0,0.9166666666666666,1.0,1.0,0.96,1.0,1.0,1.0,1.0,1.0,1.0,0.8947368421052632,0.9090909090909091,0.9473684210526315,0.8888888888888888,0.9166666666666666,1.0,0.8666666666666667,0.9285714285714286,0.9166666666666666,0.9642857142857143,0.8571428571428571,0.9285714285714286,0.8333333333333334,1.0,0.8666666666666667,1.0,1.0,0.9,1.0,0.875,
      0.8181818181818182,1.0,0.875,1.0,0.7777777777777778,0.9333333333333333,0.9411764705882353,1.0,0.8,1.0,1.0,1.0,1.0,0.8461538461538461,1.0,1.0,0.9090909090909091,1.0,0.8888888888888888,0.875,0.9166666666666666,0.8333333333333334,0.8571428571428571,0.8333333333333334,0.85,0.9,0.7142857142857143,0.9333333333333333,0.75,0.8888888888888888,0.8,0.9166666666666666,0.8,0.8076923076923077,0.6363636363636364,0.8333333333333334,0.75,0.6666666666666666,0.6,0.7333333333333333,0.75,0.8,0.5,
      0.42857142857142855,0.8571428571428571,0.75,0.75,0.8571428571428571,0.5,0.8333333333333334,0.6666666666666666,0.8,0.6666666666666666,0.6666666666666666,0.6666666666666666,0.5,0.2857142857142857,0.7142857142857143,0.6666666666666666,0.7142857142857143,0.5714285714285714,0.7142857142857143,0.625,0.5714285714285714,0.42857142857142855,0.5,0.42857142857142855]
    ],
    types: {
      'Percent female': 'area',
      'Percent male': 'area'
    },
    colors: {
      'Percent female': '#aa1e22',
      'Percent male': '#2d97e2'
    },
    groups: [['Percent female', 'Percent male']]
  },
  point: {
    show: false
  },
  axis: {
    x: {
      type: 'timeseries',
      padding: 0,
      tick: {
        format: '%Y',
        count: 31
      }
    },
    y: {
      max: 1,
      padding: 0,
      tick: {
        values: [0, 0.25, 0.5, 0.75, 1],
        format: d3.format('%')
      }
    }
  },
  grid: {
    x: {
      lines: [
        {value: '1900', text: '1900'},
        {value: '1993', text: 'First equal year'},
        {value: '2000', text: '2000'}
      ]
    }
  },
  tooltip: {
    format: {
      value: function(x) {return Math.round(x * 100) + '%';}
    }
  },
  title: {
    text: 'Gender breakdown of Penn\'s honorary degrees',
    padding: {
      top: 0,
      bottom: 10,
      left: 0,
      right: 0
    }
  }
});

var decades = c3.generate({
  bindto: '#decades',
  data: {
    x: 'x',
    order: function (a, b) {
      return a.id < b.id;
    },
    columns: [
      ['x', '1990 to 1999', '2000 to 2009', '2010 to 2017'],
      ['Penn', 0.297619047619, 0.360655737705, 0.431034482759],
      ['Harvard', 0.275510204082, 0.267326732673, 0.356164383562],
      ['Brown', 0.288288288288, 0.409090909091, 0.460317460317]
    ],
    types: {
      'Penn': 'bar',
      'Brown': 'bar',
      'Harvard': 'bar'
    },
    colors: {
      'Penn': '#011f5b',
      'Brown': '#4E3629',
      'Harvard': '#A51C30'
    }
  },
  axis: {
    x: {
      type: 'category'
    },
    y: {
      max: 0.5,
      padding: 0,
      tick: {
        values: [0, 0.125, 0.25, 0.375, 0.5],
        format: d3.format('%')
      }
    }
  },
  tooltip: {
    format: {
      value: function(x) {return Math.round(x * 100) + '% female';}
    }
  },
  title: {
    text: 'Percent female recepients by decade',
    padding: {
      top: 0,
      bottom: 10,
      left: 0,
      right: 0
    }
  }
});

// initially displays overall breakdown
var penn = c3.generate({
  bindto: '#penn',
  transition: {
    duration: 600
  },
  data: {
    columns: [
      ['Male', 0.90574712643],
      ['Female', 0.0942528735632]
    ],
    type: 'pie',
    colors: {
      'Female': '#aa1e22',
      'Male': '#2d97e2'
    }
  },
  title: {
    text: 'Penn\'s honorary degree recepients, 1757 to 2017'
  }
});

// alternates between overall and since 1990
var alternate = setInterval(function () {
  if (penn.data()[0].values[0].value == 0.90574712643) {
    penn.load({
      columns: [
        ['Male', 0.64532019704],
        ['Female', 0.354679802956]
      ]
    });
    d3.select('#penn .c3-title').node().innerHTML = 'Penn\'s honorary degree recepients, 1990 to 2017';
  } else {
    penn.load({
      columns: [
        ['Male', 0.90574712643],
        ['Female', 0.0942528735632]
      ]
    });
    d3.select('#penn .c3-title').node().innerHTML = 'Penn\'s honorary degree recepients, 1757 to 2017';
  }
}, 3500);
