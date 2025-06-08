// =======================================
// GraphicCast - Weather Fetch & Display
// =======================================

// === DOM Element References ===
const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

// === Search Button Event Listener ===
search.addEventListener('click', () => {
    
    // OpenWeatherMap API key
    const APIKey = 'd8fc0cd12995dd645cd83b2f3df64d7a';
    
    // Get the city name from user input
    const city = document.querySelector('.search-box input').value;

    // If input is empty, exit early
    if (city === '') return;

    // === Fetch Weather Data from OpenWeatherMap API ===
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            // === Error: City Not Found ===
            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            // === Reset Error UI ===
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            // === Extract and Display Weather Data ===
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            // Choose weather icon based on weather type
            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'clear.png';
                    break;
                case 'Rain':
                    image.src = 'rain.png';
                    break;
                case 'Snow':
                    image.src = 'snow.png';
                    break;
                case 'Clouds':
                    image.src = 'cloud.png';
                    break;
                case 'Haze':
                    image.src = 'mist.png';
                    break;
                default:
                    image.src = '';
            }

            // Fill in weather details
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°F</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}MP/H`;

            // Show weather boxes with fade-in animation
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');

            // Expand container to fit content
            container.style.height = '590px';
        });
});