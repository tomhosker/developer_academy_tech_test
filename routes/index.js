/*
Returns the home page.
*/

// Imports.
const express = require("express");

// Local imports.
const SummariesMaker = require("../lib/summaries_maker.js");

// Constants.
const router = express.Router();

// GET home page.
router.get("/", function (req, res, next) {
    const summariesMaker = new SummariesMaker(req, res, "London");

    summariesMaker.wrapUp();
});

module.exports = router;
