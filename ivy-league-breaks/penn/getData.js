var https = require('https');
var fs = require('fs');
var textChunk = '';
https.get('https://almanac.upenn.edu/penn-academic-calendar', function (res) {
  res.on('data', function (data) {
  	textChunk = data.toString('utf8');
  	console.log(textChunk);
  });
});


function readToFile(textChunk) {
	fs.writeFile('data.html', textChunk, function (err) {
		if(err) {
			console.log(err);
		} 
	});	
}