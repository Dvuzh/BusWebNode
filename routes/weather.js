var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/search-location-weather', (req, res) => {
	const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Omsk,Ru';
	const apiId = '&appid=b41984b8b5135f1695c5faac30990138&units=metric';	

	const userLocation = (baseUrl, apiId) => {
		let newUrl = baseUrl + apiId;
		return newUrl;
	};

	const apiUrl = userLocation(baseUrl, apiId);

	fetch(apiUrl)
		.then(res => res.json())
		.then(temperature => {
			res.send({
				temperature
			});
		})
		.catch(err => {
			res.redirect('/error');
		});

});

module.exports = router;