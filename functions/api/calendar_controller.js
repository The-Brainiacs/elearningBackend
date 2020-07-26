const calendarModel = require("../models/calendar_model");
const express = require("express");
const router = express.Router();

// Get all event
router.get("/", async (req, res, next) => {
  try {
    const result = await calendarModel.get();
    return res.json(result);
  } catch (e) {
    return next(e);
  }
});

// Create a new event
router.post("/", async (req, res, next) => {
  try {
    const result = await calendarModel.create(req.body);
    if (!result) return res.sendStatus(409);
    return res.status(201).json(result);
  } catch (e) {
    return next(e);
  }
});


module.exports = router;
