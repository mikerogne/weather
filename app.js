const storage = new Storage();
const weatherLocation = storage.getLocationData();


// Init weather object
const weather = new Weather(weatherLocation.zip);
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    e.preventDefault;
    const zip = document.getElementById('zip').value;

    weather.changeLocation(zip);
    storage.setLocationData(zip);
    getWeather();

    // JQuery!
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
            console.log(results);
        })
        .catch(err => console.log(err));
}

function windDirectionFromDegrees(deg) {
    if (deg >= 11.25 && deg <= 33.75) {
        return 'NNE';
    }
    if (deg >= 33.75 && deg <= 56.25) {
        return 'NE';
    }
    if (deg >= 56.25 && deg <= 78.75) {
        return 'ENE';
    }
    if (deg >= 78.75 && deg <= 101.25) {
        return 'E';
    }
    if (deg >= 101.25 && deg <= 123.75) {
        return 'ESE';
    }
    if (deg >= 123.75 && deg <= 146.25) {
        return 'SE';
    }
    if (deg >= 146.25 && deg <= 168.75) {
        return 'SSE';
    }
    if (deg >= 168.75 && deg <= 191.25) {
        return 'S';
    }
    if (deg >= 191.25 && deg <= 213.75) {
        return 'SSW';
    }
    if (deg >= 213.75 && deg <= 236.25) {
        return 'SW';
    }
    if (deg >= 236.25 && deg <= 258.75) {
        return 'WSW';
    }
    if (deg >= 258.75 && deg <= 281.25) {
        return 'W';
    }
    if (deg >= 281.25 && deg <= 303.75) {
        return 'WNW';
    }
    if (deg >= 303.75 && deg <= 326.25) {
        return 'NW';
    }
    if (deg >= 326.25 && deg <= 348.75) {
        return 'NNW';
    }
    return 'N';
}
