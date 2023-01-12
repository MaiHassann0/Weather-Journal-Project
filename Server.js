// Setup empty JS object to act as endpoint for all routes
const projectData = {}

// Require Express to run server and routes
const express = require('express')
const bodyParser = require('body-parser')

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors());

// Initialize the main project folder
app.use(express.static('WebSite'));

// Create a Local Server
  const port = 8080;
  const server = app.listen(port, listening);

function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`); 
}

//Add a GET route that returns the projectData object in server code 
app.get("/get-data", function(req, res){
  res.send(projectData);
});

//add a POST route that adds incoming data to projectData
app.post("/post-data", function (req, res) {
  res.send(projectData);
  req.body
});

//The POST route should anticipate receiving three pieces of data from the request body: temperature, date, user response


//Make sure your POST route is setup to add each of these values with a key to projectData.


