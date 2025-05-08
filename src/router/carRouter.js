const express = require('express');
const { getAllCars, getCarById, createCar, updateCar, deleteCar } = require('../controller/carController');
const { authMiddleware } = require('../middleware/auth.middleware');
const carRouter = express.Router();

carRouter.get("/", getAllCars )
carRouter.get("/:id", getCarById)
carRouter.post("/", authMiddleware, createCar)
carRouter.put("/:id", updateCar)
carRouter.delete("/:id", deleteCar)

module.exports = carRouter;