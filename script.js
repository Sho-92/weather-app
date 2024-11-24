'use strict'

const cityInput = document.getElementById("city-input");
const weatherBtn = document.getElementById("weather-btn");

const API_KEY = "05ec824f373d23b2c1cd8c5b623e4fa8";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

const customIcons = {
  Clear: "./image/clear.png",
  Clouds: "./image/clouds.png",
  Rain: "./image/rain.png",
  Snow: "./image/snow.png",
  Thunderstorm: "./image/thunderstorm.png",
};

weatherBtn.addEventListener("click", () => {
  const city = cityInput.value;
  if (city) {
    fetchWeatherData(city);
  } else {
    alert("Please enter a city name.")
  }
});

async function fetchWeatherData(city) {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    // Extract the data you need
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;
    const weatherMain = weather[0].main;
    const date = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
  
    const weatherIcon = document.getElementById("weather-icon");
    weatherIcon.src = customIcons[weatherMain];

    // Display data on screen
    document.getElementById("date").textContent = `${date}`;
    document.getElementById("city-name").textContent = `${name}`;
    document.getElementById("temperature").textContent = `${temperature}°C`;
    document.getElementById("description").textContent = description;

    const weatherInfo = document.querySelector(".weather-info");
    weatherInfo.classList.add("show");

    changeBackground(weatherMain);
    
    // Get 5 day forecast
    fetchFiveDayForecast(city); //This is very important! ! Call in at this timing!

  } catch (error) {
    console.error(error);
    alert(`Error: ${error.message}`);
  };
};

function changeBackground(weatherMain) {
  const body = document.body;

  switch (weatherMain) {
    case "Clear":
      body.style.background = "linear-gradient(to bottom, #ff7e5f, #feb47b)";
      break;
    case "Clouds":
      body.style.background = "linear-gradient(to bottom, #bdc3c7, #2c3e50)";
      break;
    case "Rain":
      body.style.background = "linear-gradient(to bottom, #1e79e9, #323a42)";
      break;
    case "Snow":
      body.style.background = "linear-gradient(to bottom, #83a4d4, #b6fbff)";
      break;
    case "Thunderstorm":
      body.style.background = "linear-gradient(to bottom, #141e30, #243b55)";
      break;
  }
};

// 5-day forecast data acquisition function
async function fetchFiveDayForecast(city) {
  try {
    const response = await fetch(`${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) throw new Error("Failed to fetch forecast data");

    const data = await response.json();
    console.log("Forecast Data:", data);

    // Get data only at noon every day
    const dailyForecast = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    // Display 5-day forecast on screen
    displayFiveDayForecast(dailyForecast);
  } catch (error) {
    console.error(error);
    alert(`Error: ${error.message}`);
  }
};

// Function to display 5-day forecast
function displayFiveDayForecast(forecast) {
  const forecastContainer = document.getElementById("five-day-forecast");
  forecastContainer.innerHTML = ""; // Initialization

  forecast.forEach(day => {
    const date = new Date(day.dt * 1000).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    const temperature = Math.round(day.main.temp);
    const description = day.weather[0].description;
    const weatherMain = day.weather[0].main;    
    const icon = customIcons[weatherMain] || "./image/default.png";
    
    const forecastElement = document.createElement("div");
    forecastElement.classList.add("forecast-day");
    forecastElement.innerHTML = `
      <p>${date}</p>
      <img src="${icon}" alt="${description}" />
      <p>${temperature}°C</p>
      <p>${description}</p>
    `;
    forecastContainer.appendChild(forecastElement);
  });
};


