var cheerio = require('cheerio');
var request = require('request');
var moment = require('moment');
var fs = require('fs');
request({
	method: 'GET',
	url: 'https://bulletin.brown.edu/academic-calendar/'
}, function (err, res, body) {
	if(err) {
		console.log(err);
	} else {
		$ = cheerio.load(body);
		var dates = [];
		var desc = [];
		
		for(var i = 0; i < $('td').length; i++) {
			var data = $('td')[i].children[0].data;
			if($('td')[i].children[0].data.indexOf(',') != -1) {
				data = data.replace(',', '');
			}
			if(i % 3 == 0) {
				dates.push(data);
			} else if(i % 3 == 2) {
				desc.push(data);
			}
			
		}
		var text = '';
		for(var i = 0; i < dates.length; i++) {
			text = text + dates[i] + ',' + desc[i] + '\n';
		}
		fs.writeFile('brown.csv', text, function (err) {
			if(err) {
				throw err;
			} 
			console.log('Success!');
		});
		var newText = '';
		fs.readFile('brown_clean.csv', 'UTF-8', function(err, data) {
			var arr = data.split('\n');
			for(var i = 0; i < arr.length; i++) {
				var entries = arr[i].split(',');
				var date = entries[0];
				var description = entries[1];
				if(date.indexOf('-') == -1) {
					count = 1;
				} else {
					var parseDate = date.split('-');
					var date1 = new Date(parseDate[0]);
					var date2 = new Date(parseDate[1]);
					count = (date2.getTime() - date1.getTime()) / (1000*60*60*24);
				}
				newText = newText + date + ',' + description + ',' + count + '\n';
			}
			fs.writeFile('brown_clean_FINAL.csv', newText, function (err) {
				if(err) {
					throw err;
				} 
				console.log('Success!');
			});
		})

	}
});