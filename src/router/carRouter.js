const express = require('express');
const { getAllCars, getCarById, createCar, updateCar, deleteCar } = require('../controller/carController');
const carRouter = express.Router();

carRouter.get("/", getAllCars )
carRouter.get("/:id", getCarById)
carRouter.post("/", createCar)
carRouter.put("/:id", updateCar)
carRouter.delete("/:id", deleteCar)

module.exports = carRouter;