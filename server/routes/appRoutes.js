const express = require("express");
const router = express.Router();

const appController = require("../controllers/appController");

router.get("/", appController.getProducts);

router.get("/:id", appController.getProduct);

router.post("/", appController.addSellingPlanInfo);

router.post("/cart", appController.addCart);

module.exports = router;
