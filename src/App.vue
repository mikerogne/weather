<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto text-center mt-5 p-5 rounded">
                <WeatherDisplay
                    v-show="weather.location"
                    :weather="weather"
                ></WeatherDisplay>
                <p v-show="!weather.location">Set your location to see the weather.</p>
                <hr/>
                <UpdateLocation @update="updateLocation($event)"></UpdateLocation>
                <small><a href="#" @click.prevent="clearLocation">Clear location</a></small>
            </div>
        </div>
    </div>
</template>

<script>
    import WeatherDisplay from './components/WeatherDisplay.vue';
    import UpdateLocation from './components/UpdateLocation.vue';
    import Weather from './services/Weather.js';
    import { getTime, windDirectionFromDegrees } from './helpers';

    const weatherService = new Weather();

    export default {
        name: 'app',
        components: {
            WeatherDisplay,
            UpdateLocation,
        },
        data() {
            return {
                location: null,
                weather: this.blankWeatherObject(),
            };
        },
        methods: {
            updateLocation(location) {
                this.location = location;

                localStorage.setItem('zip', location);

                weatherService.getWeather(this.location)
                              .then(weather => {
                                  this.weather.location = `${weather.name}`;
                                  this.weather.desc = weather.weather[0].main;
                                  this.weather.string = `${weather.main.temp}\u00B0F`;
                                  this.weather.humidity = `Humidity: ${weather.main.humidity}%`;
                                  this.weather.pressure = `Pressure: ${weather.main.pressure} hPa`;
                                  this.weather.windSpeed = `Wind Speed: ${weather.wind.speed} mph`;
                                  this.weather.windDirection = `Wind Direction: ${windDirectionFromDegrees(weather.wind.deg)}`;
                                  this.weather.sunrise = `Sunrise: ${getTime(weather.sys.sunrise)}`;
                                  this.weather.sunset = `Sunset: ${getTime(weather.sys.sunset)}`;
                              })
                              .catch(err => alert(`Error fetching weather: ${err.message}`));
            },
            clearLocation() {
                localStorage.removeItem('zip');

                this.$set(this, 'weather', this.blankWeatherObject());
            },
            blankWeatherObject() {
                return {
                    location: '',
                    desc: '',
                    string: '',
                    humidity: '',
                    pressure: '',
                    windSpeed: '',
                    windDirection: '',
                    sunrise: '',
                    sunset: '',
                };
            },
        },
        mounted() {
            const zip = localStorage.getItem('zip');

            if (zip) {
                this.updateLocation(zip);
            }
        },
    }
</script>
