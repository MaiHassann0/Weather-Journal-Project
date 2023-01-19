// Setup empty JS object to act as endpoint for all routes
const projectData = {};

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
const cors = require('cors');
const { request } = require('express');
app.use(cors());

// Initialize the main project folder
app.use(express.static('WebSite'));

// Create a Local Server
//
  const port = 8080;
  const server = app.listen(port, listening);

function listening() {
    console.log("Server Running");
    console.log(`Running successfully on: http://localhost:${port}`); 
}


//Add a GET route that returns the projectData object in server code 
/* GET route: http://localhost:8080/get-data */
//
app.get("/get-data", function(req, res){
  console.log(Get-Data);
  res.send(projectData);
});


//add a POST route that adds incoming data to projectData
/* POST route: http://localhost:8080/post-data */
//
app.post("/post-data", function (req, res) {
  console.log(Post-Data, request.body);
  //-projectData now "using Dot notation"
  //--The POST route should anticipate receiving three pieces of data from the request body: temperature, date, user response

  let newProjectData={
    temp: request.main.temp,
    date: request.main.date,
    content: request.main.content
  };
  res.send(projectData);
});
