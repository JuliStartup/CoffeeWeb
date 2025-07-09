const express = require("express");
const router = express.Router();

const appController = require("../controllers/appController");

router.get("/", appController.getProducts);

router.get("/:id", appController.getProduct);

router.post("/", appController.addSellingPlanInfo);

module.exports = router;
