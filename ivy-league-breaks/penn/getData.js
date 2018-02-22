var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
request({
	method: 'GET',
	url: 'https://almanac.upenn.edu/penn-academic-calendar'
}, function (err, res, body) {
	if(err) {
		console.log(err);
	} else {
		$ = cheerio.load(body);
		var desc = [];
		var twenty17 = [];
		var twenty18 = [];
		var twenty19 = [];
		
		// var headers = [];

		// for(var i = 0; i < $('th').length; i++) {
		// 	if($('th')[i].children[0] && $('th')[i].children[0].data.indexOf('Fall Term') != -1) {
		// 		headers.push($('th')[i].children[0].data.substring(0, $('th')[i].children[0].data.indexOf(' ')));
		// 	}
		// } //trying to make code less dependent on hard-coded years
		
		for(var i = 0; i < $('td').length; i++) {
			if(i % 4 == 0) {
				if($('td')[i].children[0].data.indexOf('\n') != -1) {
					desc.push($('td')[i].children[0].data.substring(0, $('td')[i].children[0].data.indexOf('\n')));
				} else {
					desc.push($('td')[i].children[0].data);
				}
			} else if(i % 4 == 1) {
				twenty17.push($('td')[i].children[0].data);
		  } else if(i % 4 == 2) {
				twenty18.push($('td')[i].children[0].data);
		  } else if(i % 4 == 3) { 
				twenty19.push($('td')[i].children[0].data);
		  }
		}
		var allData = {};
		allData['2017'] = {};
		allData['2018'] = {};
		allData['2019'] = {};
		for(var i = 0; i < desc.length; i++) {
			allData['2017'][i] = {};
			allData['2017'][i][desc[i]] = twenty17[i];
			allData['2018'][i] = {};
			allData['2018'][i][desc[i]] = twenty18[i];
			allData['2019'][i] = {};
			allData['2019'][i][desc[i]] = twenty19[i];
		}
		console.log(desc);
		var twenty17Text = ',2017,2018,2019\n';
		for(var i = 0; i < Object.keys(allData['2017']).length; i++) {
			var og = desc[i];
			if(desc[i].indexOf(',') != -1) {
				desc[i] = desc[i].substring(0, desc[i].indexOf(',')) + ' ' + desc[i].substring(desc[i].indexOf(',') + 2);
			}
			twenty17Text = twenty17Text + desc[i] + ', ' + allData['2017'][i][og] + ', ' + allData['2018'][i][og] + ', ' + allData['2019'][i][og] + '\n'
		}
		// twenty17Text = twenty17Text + '2018\n';
		// for(var i = 0; i < Object.keys(allData['2018']).length; i++) {
		// 	twenty17Text = twenty17Text + desc[i] + ', ' + allData['2018'][i][desc[i]] + '\n'
		// }
		// twenty17Text = twenty17Text + '2019\n';
		// for(var i = 0; i < Object.keys(allData['2019']).length; i++) {
		// 	twenty17Text = twenty17Text + desc[i] + ', ' + allData['2019'][i][desc[i]] + '\n'
		// }
		fs.writeFile('penn.csv', twenty17Text, function (err) {
			if(err) {
				throw err;
			} 
			console.log('Success!');
		});
	}
});