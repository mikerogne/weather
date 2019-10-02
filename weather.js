class Weather {
    constructor(zip) {
        this.apiKey = '5e20d270b95387e63292bfb6cb127763';
        this.zip = zip;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.zip}&appid=${this.apiKey}&units=imperial`);

        const responseData = await response.json();

        return responseData;
    }

    changeLocation(zip) {
        this.zip = zip
    }
    
}