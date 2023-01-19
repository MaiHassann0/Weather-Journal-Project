/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = 'appID=fd78cbbe980178338f4f0a9fe09ffe47&units=metric';
const url = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//Create an event listener for the element with the id: generate, 
//with a callback function to execute when it is clicked.
document.getElementById('generate').addEventListener('click',func);

function func(e){
  const zipCode = document.getElementById('zip').value;
  const userFeelings = document.getElementById('feelings').value;
  
  getWeatherData(url, zipCode, apiKey)

  .then(function(data){
    console.log(data);
    //adding data to POST route
    postData('/post-data', {newDate:d, temp:data.list[0].main.temp, content:feelings})
    updateUi();
  })
};

//Inside that callback function call your async GET request with the parameters: url,  zip code ,personal API key
const getWeatherData = async (url, zipCode, apiKey)=>{
  const response = await fetch(url + zipCode + apiKey)
  // try catch errors
  try{
    const data = await response.json();
    return data;
  }catch(error){
    console.log('error', error);
  }
}

//chain another Promise that updates the UI dynamically 
// another async function that is called after the completed POST request
/* POST data */
const postData = async (url= '', data={})=>{
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers:{
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data) //create json stringify
  });
  //try catch errors
  try{
    const newData = await response.json();
    return newData;
  }catch(error){
    console.log('error', error);
  }
}

/* GET data */
const updateUI = async()=>{
  const req = await fetch('/get-data');
  //try catch errors
  try{
    const AllDataa = await req.json();
    document.getElementById('date').innerHTML= `Date: ${AllDataa[0].date}`;
    document.getElementById('temp').innerHTML= `Temperature: ${AllDataa[0].temp}`;
    document.getElementById('content').innerHTML= `Feelings: ${AllDataa[0].content}`;

  }catch(error){
    console.log('error', error);
  }
}

