
      var chart = c3.generate({
        bindto: '#fees',
        data: {
          columns: [
            [ 75, 85, 80, 80, 75, 75, 65, 80]
          ],
          type: 'bar'
        },
        axis: {
          x: {
            label: {
              text: '',
              position: 'outer-center',
            },
            type: 'category',
            categories: ['Brown', 'Cornell', 'Dartmouth', 'Harvard', 'Penn', 'Princeton', 'Yale'],

            tick: {
              centered: true
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
            }
          }
        },

        title: {
  text: 'College Application Fee For Various Ivy-Plus Colleges'
},

      });
