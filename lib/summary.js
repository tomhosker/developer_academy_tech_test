/*
This code defines a class which collects and holds a forecast summary for a
given day.
*/

// Local imports.
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
    }

    getDateObj() {
        let result = new Date();

        result.setDate(result.getDate() + this.daysAway);

        return result;
    }
}

// Exports.
module.exports = Summary;
