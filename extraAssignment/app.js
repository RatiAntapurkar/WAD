const request = require('request');

const url = 'https://api.github.com/';

const options = {
    url: url,
    headers: {
        'User-Agent': 'request'
    }
};

request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log('Data fetched successfully!');
        console.log(body);
    } else {
        console.log('Error occurred:', error);
    }
});