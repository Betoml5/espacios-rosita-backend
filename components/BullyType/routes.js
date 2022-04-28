const express = require("express");
const router = express.Router();
const controller = require("./controller");
const responseHTTP = require("../../network/response");

router.post("/create", (req, res) => {
    const { bullyType } = req.body;
    try {
        const createdBullyType = await controller.createOne(bullyType);
        return responseHTTP.success(req, res, createdBullyType, 201);
    } catch (error) {
        return responseHTTP.error(req, res, error, 500)
    }
})

router.get("/bullytype/:id", (req, res) => {
    const { id } = req.params
    try {
        const bullyType = await controller.findOne(id);
        return responseHTTP.success(req, res, bullyType, 200);
    } catch (error) {
        return responseHTTP.error(req, res, error, 500)
    }
})

