var event = [ 
{
	"id": "1",
	"title": "Magazine Street Art Market",
	"type": "art",
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
	"flag": "35",
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
		"zip": "70117",
	},
	"date":
		{
		"start-date": "July 10, 2017",
		"end-date": "July 10, 2017",
		},
	"time":
		{
		"start-time": "6:30 PM",
		"end-time": "7:30 PM",
		},
	"age-restrictions": false,
	"website": "http://www.footprintstofitness.com/calendar-hhh/pilates-parleaux-20170710",
	"admission info": "free",
	"photos": "none",
	"flag": "10",
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
		"zip": "70112",
	},
	"date":
		{
		"start-date": "July 14, 2017",
		"end-date": "July 14, 2017",
		},
	"time":
		{
		"start-time": "7:00 PM",
		"end-time": "9:30 PM",
		},
	"age-restrictions": true,
	"website": "http://bastilledaynola.com/bastilledaynola/",
	"admission info": "$125.00",
	"photos": "none",
	"flag": "25",
},



] // end event array





const express = require('express') // importing it into our server  
const app = express()  // bringing it in
const port = 3000 // new javascript. same as var
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.listen(port, function(err) {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Magic is happening on ${port}`) // also can use + port (the variable/const)
});


app.get('/', function(request, response) {  
  response.send(event);
  console.log('route succesfully getting hit');

});

app.post('/new-event', function(request, response) { 
	event.push(request.body); 
	response.send(event);
});

