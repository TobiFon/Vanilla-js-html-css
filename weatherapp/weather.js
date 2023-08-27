const apiKey = 'ad4ab3d6e6bce2077fc6de74b744fced';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');




async function getWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {
    let data = await response.json();

    document.getElementById('.city').innerHTML = data.name;
    document.getElementById('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.getElementById('.humidity').innerHTML = data.main.humidity + "%";
    document.getElementById('.wind').innerHTML = data.wind.speed;

    if (data.weather[0].main == clouds) {
    const weatherIcon = document.querySelector('.weather-icon');
    weatherIcon.src = '/images/clouds.png';
    }
    else if (data.weather[0].main == Clear) {
      const weatherIcon = document.querySelector('.weather-icon');
      weatherIcon.src = '/images/clear.png';
    }
    else if (data.weather[0].main == Rain) {
      const weatherIcon = document.querySelector('.weather-icon');
      weatherIcon.src = '/images/rain.png';
    }else if (data.weather[0].main == Drizzle) {
      const weatherIcon = document.querySelector('.weather-icon');
      weatherIcon.src = '/images/drizzle.png';
    }else if (data.weather[0].main == Mist) {
      const weatherIcon = document.querySelector('.weather-icon');
      weatherIcon.src = '/images/mist.png';
    }
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';

  } 
}

searchBtn.addEventListener('click', () => {
  getWeather(searchBox.value);
});
  