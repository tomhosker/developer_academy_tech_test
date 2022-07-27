/*
This code defines a class which holds the properties of the weather summaries
page.
*/

// Non-standard imports.
const axios = require("axios");

// Local imports.
const constants = require("./constants.js");
const Finaliser = require("../lib/finaliser.js");
const Summary = require("./summary.js");
const Timings = require("./timings.js");

// Local constant objects.
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
console.log(process.env);
        const url =
            constants.API_URL_STEM+
            "&q="+
            this.locationString+
            "&cnt="+
            constants.DAYS_TO_FORECAST+
            "&appid="+
            process.env.npm_config_OPENWEATHER_API_KEY
        let that = this;
        let summaryObj;

        axios.get(url).then(response => {
            for (let i = 0; i < that.summaries.length; i++) {
                that.summaries[i].update(response.data.list[i]);
            }
            finaliser.protoRender(that.req, that.res, VIEW, that);
        }).catch(err => { that.res.send("Problem accessing API.") });
    }
}

// Exports.
module.exports = SummariesMaker;
