/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = 'appID=fd78cbbe980178338f4f0a9fe09ffe47&units=metric';
const url = 'https://api.openweathermap.org/data/2.5/weather?zip={zip code}&appid={API key}';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
//
const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

postData('/add', {answer:42});
