const apiKey = 'c4d1759003a34459b3a11015240701';
const apiUrl = 'http://api.weatherapi.com/v1/current.json?';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const lonElement = document.getElementById("lon")
const latElement = document.getElementById("lat")

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}key=${apiKey}&q=${location}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = location;
            temperatureElement.textContent = `Temperature: ${Math.round(data.current.temp_c)}°C`
            descriptionElement.textContent = `Condition: ${data.current.condition.text}`;
            lonElement.textContent = `Longitude: ${data.location.lon}`;
            latElement.textContent = `Latitude: ${data.location.lat}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}