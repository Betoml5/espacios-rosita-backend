const controller = require("./controller");
const express = require("express");
const router = express.Router();
const response = require("../../network/response");

router.post("/create", async (req, res) => {
  try {
    const report = req.body;
    const reportCreated = await controller.create(report);
    return response.success(req, res, reportCreated, 201);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.get("/all", async (req, res) => {
  try {
    const reports = await controller.getAll();
    return response.success(req, res, reports, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const report = await controller.get(id);
    return response.success(req, res, report, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const report = await controller.deleteOne(id);
    return response.success(req, res, report, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

module.exports = router;
