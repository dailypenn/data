var chart = c3.generate({
  bindTo: '#chart',
  data: {
    columns: [
      ["Chick-Fil-A",12],
      ["Shake Shack",5],
      ["Federal Donuts",3],
      ["Honest Tom's",2],
      ["Side of the Road Jerk Chicken",1],
      ["Smoke's Poutinerie",1],
      ["Nora's Tacos",1],
      ["Pat's Steaks",1],
      ["Philly Soft Pretzel Factory",1],
      ["Baby Blue's",1],
      ["Mocktails & Pizza",1],
      ["Chips & Salsa/Cookies",1],
      ["Appetizers",1],
      ["Mediterranean Delights",1],
      ["Homemade foods",1],
      ["White Castle",1],
      ["Five Guys",1],
      ["Jim's Cheesesteaks",1],
      ["Franklin Fountain Shakes",1],
      ["Ben & Jerry's",1],
      ["Dippin' Dots",1],
      ["Pig Roast",1],
      ["Buffalo Wild Wings",1],
      ["Chips",1],
      ["Hors d'oeuvres",1]
    ],
    type: 'donut',
    colors: {
      "Chick-Fil-A": '#231f20',
      "Shake Shack": '#7fafbd',
      "Federal Donuts": '#84c5d6',
      "Honest Tom's": '#2a7ba6',
      "Side of the Road Jerk Chicken": '#a9cad5',
      "Smoke's Poutinerie": '#dee2e3',
      "Nora's Tacos": '#4b6876',
      "Pat's Steaks": '#555a60',
      "Philly Soft Pretzel Factory": '#ece8e3',
      "Baby Blue's": '#b1acad',
      "Mocktails & Pizza": '#ded6d0',
      "Chips & Salsa/Cookies": '#c7bac5',
      "Appetizers": '#6f6766',
      "Appetizers": '#b7b0a4',
      "Mediterranean Delights": '#f1c37b',
      "Homemade foods": '#c6bc7e',
      "White Castle": '#f3f0b6',
      "Five Guys": '#f0e36c',
      "Jim's Cheesesteaks": '#6b0e14',
      "Franklin Fountain Shakes": '#a01d23',
      "Ben & Jerry's": '#d42128',
      "Dippin' Dots": '#db5843',
      "Pig Roast": '#e27f66',
      "Buffalo Wild Wings": '#c5907f',
      "Chips": '#ddc0b5',
      "Hors d'oeuvres": '#763527'
    }
  },
  donut: {
    label: {
      format: function (value, ratio, id) { return value; },
      threshold: 0.04
    }
  },
  tooltip: {
    format: {
      value: function (value, ratio, id, index) { return value; }
    }
  }
});
