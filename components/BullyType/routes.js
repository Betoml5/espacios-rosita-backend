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

router.get("/all", (req, res) => {
    try {
        const bullyTypes = await controller.find();
        return responseHTTP.success(req, res, bullyTypes, 200);
    } catch (error) {
        return responseHTTP(re, res, error, 500)
    }
})

router.put("/update/:id", (req, res) => {
    const { id } = req.params;
    const { bullyType } = req.body;
    try {
        const updatedBullyType = await controller.updateOne(id, bullyType)
        return responseHTTP.success(req, res, updatedBullyType, 200);

    } catch (error) {
        return responseHTTP(req, res, error, 500)
    }
})


router.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    try {
        const deletedBullyType = await controller.deleteOne(id)
        return responseHTTP.success(req, res, deletedBullyType, 200);
    } catch (error) {
        return responseHTTP(req, res, error, 500)
    }
})
