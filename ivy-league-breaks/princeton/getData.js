var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
request({
	method: 'GET',
	url: 'https://www.princeton.edu/pub/profile/calendar/'
}, function (err, res, body) {
	if(err) {
		console.log(err);
	} else {
		$ = cheerio.load(body);
		var dates = [];
		var desc = [];
		
		for(var i = 0; i < $('td').length; i++) {
			if(i % 3 == 0) {
				dates.push($('td')[i].children[0].data);
			} else if(i % 3 == 2) {
				desc.push($('td')[i].children[0].data);
			}
		}

		for(var i = 0; i < dates.length; i++) {
			if(dates[i].indexOf(',') != -1) {
				dates[i] = dates[i].substring(0, dates[i].indexOf(','));
			}
			if(dates[i].indexOf('–') != -1) {
				dates[i] = dates[i].replace('–', '-');
			}
		}

		var text = '2017\n';
		for(var i = 0; i < desc.length; i++) {
			text = text + desc[i] + ',' + dates[i] + '\n';
		}
		fs.writeFile('princeton.csv', text, function (err) {
			if(err) {
				throw err;
			} 
			console.log('Success!');
		});
		fs.readFile('princeton_clean.csv', 'utf8', function (err, data) {
			if(err) {
				console.log(err);
			}
			console.log(data);
		})
	}
});