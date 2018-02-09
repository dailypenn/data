var chart = c3.generate({
                bindto: '#fees',
                padding: {
                    left: 60
                },
                color: {
                    pattern: ['#EE7F2D', '#4E3629', '#A51C30', '#01256E', '#B31B1B', '#00693E', '#00356B', '#C4D8E2', '#8C1515']
                },
                data: {
                    x: 'x',
                    columns:
                        [
                      ['x', 'Princeton', 'Brown', 'Harvard', 'Penn', 'Cornell', 'Dartmouth', 'Yale', 'Columbia', 'Stanford'],
                      ['Application Fee', 65, 75, 75, 75, 80, 80, 80, 85, 90]
                      ],

                    type: 'bar',
                    colors: {
                        'Application Fee': '#000000',
                    },
                    color: function(inColor, data) {
                        var colors = ['#EE7F2D', '#4E3629', '#A51C30', '#01256E', '#B31B1B', '#00693E', '#00356B', '#C4D8E2', '#8C1515'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }

                        return inColor;
                    },
                    order: 'asc'
                },
                axis: {
                    x: {
                        type: 'category',
                        label: {
                          text: 'School Name',
                          position: 'outer-center',
                        },
                        min: 0,
                        padding: {
                          top: 0,
                          bottom: 0
                        }
                    },
                    y: {
                        label: {
                          text: 'Application Fee ($)',
                          position: 'outer-middle'
                        },
                        max: 100,
                        min: 0,
                        padding: {
                          top: 0,
                          bottom: 0
                        },
                        tick: {
                            format: d3.format("$")
                        }
                      }   
                },
                tooltip: {
                    grouped: false
                },
                legend: {
                    show: false
                },
                title: {
                  text: 'College Application Fee for Various Ivy-Plus Colleges'
                }
            });

var chart2 = c3.generate({
                bindto: '#total',
                padding: {
                    left: 60
                },
                color: {
                    pattern: ['#00693E', '#EE7F2D', '#4E3629', '#00356B', '#A51C30', '#01256E', '#C4D8E2', '#B31B1B', '#8C1515']
                },
                data: {
                    x: 'x',
                    columns:
                        [
                      ['x', 'Darmouth', 'Princeton', 'Brown', 'Yale', 'Harvard', 'Penn', 'Columbia', 'Cornell', 'Stanford'],
                      ['Revenue', 1602720, 2018640, 2454300, 2632000, 2962950, 3029550, 3178065, 3763040, 3966570]
                      ],

                    type: 'bar',
                    colors: {
                        'Revenue': '#000000',
                    },
                    color: function(inColor, data) {
                        var colors = ['#00693E', '#EE7F2D', '#4E3629', '#00356B', '#A51C30', '#01256E', '#C4D8E2', '#B31B1B', '#8C1515'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }

                        return inColor;
                    }
                },
                axis: {
                    x: {
                        type: 'category',
                        label: {
                          text: 'School Name',
                          position: 'outer-center',
                        },
                        min: 0,
                        padding: {
                          top: 0,
                          bottom: 0
                        }
                    },
                    y: {
                        label: {
                          text: 'Revenue ($)',
                          position: 'outer-middle'
                        },
                        min: 0,
                        padding: {
                          top: 0,
                          bottom: 0
                        },
                        tick: {
                            format: d3.format("$s")
                        }
                      }   
                },
                tooltip: {
                    grouped: false,
                    format: {
                        value: function (value, ratio, id) {
                            var format = id === 'Revenue' ? d3.format('$,.') : d3.format('$');
                            return format(value);
                        }
                    }
                },
                legend: {
                    show: false
                },
                title: {
                  text: 'Total Revenue from Application Fees'
                }
            });

var chart3 = c3.generate({
                bindto: '#waiver',
                padding: {
                    left: 60
                },
                color: {
                    pattern: ['#00693E', '#EE7F2D', '#4E3629', '#00356B', '#A51C30', '#01256E', '#C4D8E2', '#B31B1B', '#8C1515']
                },
                data: {
                    x: 'x',
                    columns:
                        [
                      ['x', 'Darmouth', 'Princeton', 'Brown', 'Yale', 'Harvard', 'Penn', 'Columbia', 'Cornell', 'Stanford'],
                      ['Revenue', 1442448, 1816776, 2208870, 2368800, 2666655, 2726595, 2860259, 3386736, 3569913]
                      ],

                    type: 'bar',
                    colors: {
                        'Revenue': '#000000',
                    },
                    color: function(inColor, data) {
                        var colors = ['#00693E', '#EE7F2D', '#4E3629', '#00356B', '#A51C30', '#01256E', '#C4D8E2', '#B31B1B', '#8C1515'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }

                        return inColor;
                    }
                },
                axis: {
                    x: {
                        type: 'category',
                        label: {
                          text: 'School Name',
                          position: 'outer-center',
                        },
                        min: 0,
                        padding: {
                          top: 0,
                          bottom: 0
                        }
                    },
                    y: {
                        label: {
                          text: 'Revenue ($)',
                          position: 'outer-middle'
                        },
                        min: 0,
                        padding: {
                          top: 0,
                          bottom: 0
                        },
                        tick: {
                            format: d3.format("$s")
                        }
                      }   
                },
                tooltip: {
                    grouped: false,
                    format: {
                        value: function (value, ratio, id) {
                            var format = id === 'Revenue' ? d3.format('$,.') : d3.format('$');
                            return format(value);
                        }
                    }
                },
                legend: {
                    show: false
                },
                title: {
                  text: 'Revenue from Application Fees after Fee Waivers (Assumes 10% Waive Rate)'
                }
            });