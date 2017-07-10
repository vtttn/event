var event = [ 
{
	"id": "1",
	"title": "Magazine Street Art Market",
	"type": ["art"],
	"description": "Welcome to the magical Magazine St. Art Market! We aim to bring the best local artists & craftsmen to Magazine Street, and inspire new art collectors",
	"location": {
		"street": "3336 Magazine St",
		"city": "New Orleans",
		"state": "LA",
		"zip": "70115"
	},
	"date":
		{
		"startDate": "July 7, 2017",
		"endDate": "July 7, 2017"
		},
	"time":
		{
		"startTime": "4:00 PM",
		"endTime": "6:00 PM"
		},
	"ageRestriction": false,
	"website": "https://www.facebook.com/pg/magazineartmarket/about/",
	"admission": "0",
	"photos": "none",
	"flag": "35"
} ,
{
	"id": "2",
	"title": "Pilates @ Parleaux",
	"type": [ "fitness", "drink" , "health"],
	"description": "Come experience Parleaux Beer Lab - NOLA's best new brewery - with the Footprints krewe! The benefits of Pilates are endless including getting those Janet Jackson abs and lean dancer's legs. If you've been to any of our classes/events then you know that they're NON-TRADITIONAL & TONS OF FUN with awesome music! INVITE YOUR KREWE directly in this event!",
	"location": {
		"street": "634 Lesseps Street",
		"city": "New Orleans",
		"state": "LA",
		"zip": "70117"
	},
	"date":
		{
		"startDate": "July 10, 2017",
		"endDate": "July 10, 2017"
		},
	"time":
		{
		"startTime": "6:30 PM",
		"endTime": "7:30 PM"
		},
	"ageRestriction": false,
	"website": "http://www.footprintstofitness.com/calendar-hhh/pilates-parleaux-20170710",
	"admission": "0",
	"photos": "none",
	"flag": "10"
},
{
	"id": "3",
	"title": "Arnaud’s Bastille Day Fête Wine Dinner",
	"type": [ "cultural", "drink" , "food" , "music" ],
	"description": "Named the third best Bastille Day celebration in the world by Reuters.com, Bastille Day Fête celebrates the French National Day in America’s most French city. Now in its sixth year, the celebration will be bringing even more of its French flair to the people of New Orleans. Join us in celebrating our French heritage on the 228th anniversary of Bastille Day and commemorate French Independence Day as the French do, with fine champagne, cuisine and communal dining. Guests will enjoy a four-course menu prepared by Chef Tommy DiGiovanni, paired perfectly with Moet & Chandon champagne.",
	"location": {
		"street": "813 Bienville Street",
		"city": "New Orleans",
		"state": "LA",
		"zip": "70112"
	},
	"date":
		{
		"startDate": "July 14, 2017",
		"endDate": "July 14, 2017"
		},
	"time":
		{
		"startTime": "7:00 PM",
		"endTime": "9:30 PM"
		},
	"ageRestriction": true,
	"website": "http://bastilledaynola.com/bastilledaynola/",
	"admission": "125.00",
	"photos": "none",
	"flag": "25"
},



] // end event array





const express = require('express') // importing it into our server  
const app = express()  // bringing it in
const port = 3000 // new javascript. same as var
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


// blocking out Mongoose to have Postman work
// Mongoose Schema Definition
	Schema = new mongoose.Schema({
		id      : String,
		title	: String,
		type	: Array,
		description: String,
		location: String,
		date 	: String,
		time 	: String,
		ageRestriction: Boolean,
		website	: String,
		admission: String,
		photos 	: String,
		flag	: String,
	})

	event = mongoose.model('event', Schema);



mongoose.connect('mongodb://heroku_b4j2nktr:gnj5m6pb65s7su7gtaj1ldf8mh@ds153732.mlab.com:53732/heroku_b4j2nktr', function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});



app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.listen(port, function(err) {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`Magic is happening on ${port}`) // also can use + port (the variable/const)
});


app.get('/all-event', function(request, response) {  
  response.send(event);
  console.log('route succesfully getting hit');

});

app.post('/new-event', function(request, response) { 
	event.push(request.body); 
	response.send(event);
});

app.get('/freeAdmission', function(request, response) {  
    var result;

    for(i = 0; i < event.length; i++){
		
	if (event[i].admission == 0){
		 return result = event[i];
		 // looping through all event to check if the value is equal to 0 and returning the whole event object
	} else {
		return null;
		}
	}
	
	response.send(result);
});  



// app.get('/api/event', function (request, response){
// 	//http://mongoosejs.com.docs/api.html#query_query-find
// 	event.find( function( err, event){
// 		res.json(200,event);
// 	});
// })

// app.post('/api/addEvent', function (request, response){
// 	var addEvent = new Event ();
// 	addEvent = {
// 		"key": "value",
// 		"otherKey": "value", 
// 	}
// })


// function filterAdmissionFree() {
//     var result = [];

//     for(i = 0; i < event.length; i++){
//     	var admission = parseInt(event[i].admission);
//     	if (event[i].admission == 0){
//     		return result;
//     	} else {
//     		return null;
//     	}
//     }
// };


