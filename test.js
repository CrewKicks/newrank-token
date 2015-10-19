var request = require('request');
var uuid = '788E656DECEA8A63690FBE23493D86D7';
var builder = require('./index');
var params = builder(uuid);
params.uuid = uuid;
request.post({
	url: 'http://www.newrank.cn/xdnphb/data/getAccountArticle',
	form: params,
	headers: {
		'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Accept:application/json': 'text/javascript, */*; q=0.01',
		'X-Requested-With': 'XMLHttpRequest'
	}
}, function(error, response, body) {
	console.log(error, body);
});