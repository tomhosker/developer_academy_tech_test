/*
This code defines a class which collects and holds a forecast summary for a
given day.
*/

// Local imports.
const constants = require("./constants.js");
const Timings = require("./timings.js");

/****************
 ** MAIN CLASS **
 ***************/

// The class in question.
class Summary {
    constructor(locationString, daysAway) {
        this.locationString = locationString;
        this.daysAway = daysAway;
        this.dateObj = this.getDateObj();
        this.dateString = new Timings(this.dateObj).getMyGreg();
        this.data = null;
        this.desc = null;
        this.tempMin = null;
        this.tempMax = null;
        this.windSpeed = null;
        this.iconURL = null;
    }

    getDateObj() {
        let result = new Date();

        result.setDate(result.getDate() + this.daysAway);

        return result;
    }

    // Update the object using JSON date from the API.
    update(data) {
        this.data = data;
        this.desc = data.weather[0].description;
        this.tempMin = kelvinToCelsius(data.main.temp_min);
        this.tempMax = kelvinToCelsius(data.main.temp_max);
        this.windSpeed = data.wind.speed;
        this.iconURL = constants.ICON_URL_STEM+data.weather[0].icon+"@2x.png";
    }
}

/**********************
 ** HELPER FUNCTIONS **
 *********************/

// Convert a float representation of a temperation in Kelvin to a float
// representation of a temperature in Celsius. Also, remove the decimal points
// a layman will not need.
function kelvinToCelsius(temp) {
    let result = temp;

    result = result+constants.KELVIN_TO_CELSIUS_ADJUSTMENT;
    result = parseFloat(result.toFixed(1));

    return result;
}

// Exports.
module.exports = Summary;
