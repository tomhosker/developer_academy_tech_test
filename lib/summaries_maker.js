/*
This code defines a class which holds the properties of the weather summaries
page.
*/

// Local imports.
const ConstantsClass = require("./constants.js");
const Finaliser = require("../lib/finaliser.js");
const Summary = require("./summary.js");
const Timings = require("./timings.js");

// Local constant objects.
const constants = new ConstantsClass();
const finaliser = new Finaliser();

// Local constant primitives.
const PAGE_TITLE = "Welcome to SkyNet";
const VIEW = "index";

/***************
** MAIN CLASS **
***************/

// The class in question.
class SummariesMaker {
    constructor(req, res, locationString) {
        this.req = req;
        this.res = res;
        this.locationString = locationString;
        this.title = PAGE_TITLE;
        this.dateObj = new Date();
        this.dateString = new Timings(this.dateObj).getMyGreg();
        this.summaries = this.getSummaries();
    }

    getSummaries() {
        let result = [];

        for (let i = 0; i < constants.DAYS_TO_FORECAST; i++) {
            result.push(new Summary(this.locationString, i));
        }

        return result;
    }

    wrapUp() {
        finaliser.protoRender(this.req, this.res, VIEW, this);
    }
}

// Exports.
module.exports = SummariesMaker;
