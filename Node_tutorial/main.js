const request = require('request');

request({ url: 'https://api.darksky.net/forecast/09c439b5f636d7f0f8166042a9628633/37.8267,-122.4233', json: true }, (error, response) => {
	try {
		console.log(response.body.daily)
	} catch (error) {
		console.log(error)
	}
})












































/* Object append */
/* let person = {
	fname: 'default',
	lname: 'default',
	getName() {
		return this.fname + ' ' + this.lname
	}
}

let per = {
	fname: 'Hari',
	lname: 'Bhai'
}

per.__prototype__ = person
console.log(per.fname) */