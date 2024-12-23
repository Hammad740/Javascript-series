const apiKey = '77b45698b945bc7944af37ccac71928f';

document.getElementById('search-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;

  if (city) {
    getWeatherData(city);
  } else {
    alert('Please enter the city name.');
  }
});

async function getWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  const weatherResult = document.getElementById('weather-result');
  document.getElementById(
    'city-name'
  ).textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById(
    'temp'
  ).textContent = `Temperature: ${data.main.temp} K`;
  document.getElementById(
    'description'
  ).textContent = `Description: ${data.weather[0].description}`;
  document.getElementById(
    'humidity'
  ).textContent = `Humidity: ${data.main.humidity} %`;
  weatherResult.style.display = 'block';
}
