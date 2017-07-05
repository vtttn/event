var event1 = [ 
{
	"id": "1",
	"title": "Magazine Street Art Market",
	"type of event": "art",
	"description": "Welcome to the magical Magazine St. Art Market! We aim to bring the best local artists & craftsmen to Magazine Street, and inspire new art collectors",
	"location": {
		"street": "3336 Magazine St",
		"city": "New Orleans",
		"state": "LA",
		"zip": "70115",
	},
	"date":
		{
		"start date": "July 7, 2017",
		"end date": "July 7, 2017",
		},
	"time":
		{
		"start time": "4:00 PM",
		"end time": "6:00 PM",
		},
	"age restrictions": false,
	"website": "https://www.facebook.com/pg/magazineartmarket/about/",
	"admission info": "free",
	"photos": "none",
	"going not going": true,
	"poster info": "anonymous",
} ]





const express = require('express') // importing it into our server  
const app = express()  // bringing it in
const port = 3000 // new javascript. same as var

app.listen(port, function(err) {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Magic is happening on ${port}`) // also can use + port (the variable/const)
});



app.get('/', function(request, response) {  
  response.send(event1);
  console.log('route succesfully getting hit');
});


app.get('/', function(request, response) {  
  response.send(event1);
  console.log('route succesfully getting hit');
});

