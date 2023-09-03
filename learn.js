const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
  params: {
    lat: '35.5',
    lon: '-78.5'
  },
  headers: {
    'X-RapidAPI-Key': '7992165c3bmsh705db01fb0a1798p194fa9jsn76a0a6353229',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}