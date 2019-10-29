export default class Weather {
    constructor(apiKey = null) {
        this.apiKey = apiKey || '5e20d270b95387e63292bfb6cb127763';
    }

    // Fetch weather from API
    async getWeather(zip) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${this.apiKey}&units=imperial`);

        return await response.json();
    }
}
