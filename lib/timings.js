/*
This code contains a class which handles time and date.
*/

// Constants.
const GREG_MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/****************
 ** MAIN CLASS **
 ***************/

// The class in question.
class Timings {
    constructor(dateObj) {
        this.greg = dateObj || new Date();
        this.gregDay = this.greg.getDate();
        this.gregMonth = this.greg.getMonth();
        this.gregYear = this.greg.getFullYear();
    }

    // Ronseal.
    getNow() {
        return this.greg.toISOString();
    }

    // Get a (Gregorian) date string, formatted just how I like it.
    getMyGreg() {
        let result, wdayString, dayString, monthString, yearString;

        wdayString = WEEKDAYS[this.greg.getDay()];
        dayString = this.gregDay.toString();
        if (dayString.length === 1) dayString = "0" + dayString;
        monthString = GREG_MONTHS[this.gregMonth];
        yearString = this.gregYear.toString();
        result = [wdayString, dayString, monthString, yearString].join(" ");

        return result;
    }
}

// Exports.
module.exports = Timings;
