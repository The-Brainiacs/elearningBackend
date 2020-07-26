const courseModel = require('../models/courses_model');
const express = require("express");
const router = express.Router();

// Get all msgs
router.get("/", async (req, res, next) => {
  try {
    const result = await courseModel.get();
    return res.json(result);
  } catch (e) {
    return next(e);
  }
});

// Get one msg
router.get("/:id", async (req, res, next) => {
  try {
    const result = await courseModel.getById(req.params.id);
    if (!result) return res.sendStatus(404);
    return res.json(result);
  } catch (e) {
    return next(e);
  }
});





// Update a msg
router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const doc = await courseModel.getById(id);
    if (!doc) return res.sendStatus(404);

    // Merge existing fields with the ones to be updated
    Object.keys(data).forEach((key) => (doc[key] = data[key]));

    const updateResult = await courseModel.update(id, doc);
    if (!updateResult) return res.sendStatus(404);

    return res.json(doc);
  } catch (e) {
    return next(e);
  }
});

// Replace a msg

module.exports = router;