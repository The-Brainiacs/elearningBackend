const studentsModel = require("../models/students_model");
const express = require("express");
const router = express.Router();

// Get all students
router.get("/", async (req, res, next) => {
  try {
    const result = await studentsModel.get();
    return res.json(result);
  } catch (e) {
    return next(e);
  }
});

// Get one students
router.get("/:id", async (req, res, next) => {
  try {
    const result = await studentsModel.getById(req.params.id);
    if (!result) return res.sendStatus(404);
    return res.json(result);
  } catch (e) {
    return next(e);
  }
});

// Create a new students
router.post("/", async (req, res, next) => {
  try {
    const result = await studentsModel.create(req.body);
    if (!result) return res.sendStatus(409);
    return res.status(201).json(result);
  } catch (e) {
    return next(e);
  }
});

// Delete a students
router.delete("/:id", async (req, res, next) => {
  try {
    const result = await studentsModel.delete(req.params.id);
    if (!result) return res.sendStatus(404);
    return res.sendStatus(200);
  } catch (e) {
    return next(e);
  }
});

// Update a students
router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const doc = await studentsModel.getById(id);
    if (!doc) return res.sendStatus(404);

    // Merge existing fields with the ones to be updated
    Object.keys(data).forEach((key) => (doc[key] = data[key]));

    const updateResult = await studentsModel.update(id, doc);
    if (!updateResult) return res.sendStatus(404);

    return res.json(doc);
  } catch (e) {
    return next(e);
  }
});

// Replace a students
router.put("/:id", async (req, res, next) => {
  try {
    const updateResult = await studentsModel.update(req.params.id, req.body);
    if (!updateResult) return res.sendStatus(404);

    const result = await studentsModel.getById(req.params.id);
    return res.json(result);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;