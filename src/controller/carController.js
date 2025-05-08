const CarModel = require('../models/carModel');
const mongoose = require('mongoose');
const carSchema = require("../DTO/car.dto");
const { MONGO_URI } = require('../config/env.variables');
const jwt = require("jsonwebtoken")



const getAllCars = async (req, res) => {
    const cars = await CarModel.find().populate("userId");
    res.send(cars);

}

const getCarById = async (req, res) => {
    const car = await CarModel.findById(req.params.id).populate("userId");
    res.send(car)
}

const createCar = async (req, res) => {
    const validation = carSchema.validate(req.body)
    if(validation.error){
        return res.status(400).send(validation.error.details[0].message)
    }
    console.log(req.body)
    const name  = req.body.name
    const year = req.body.year
    const color = req.body.color
    const isElectric = req.body.isElectric
    const userId =  req.body.userId//jwt.verify(req.headers["authorization"]?.split(" ")[1])
    console.log(userId , "decoded");
    
    const car = new CarModel({
        name,
        year,
        color,
        isElectric,
        userId
    })
    await car.save();
    res.send("Car created successfully")
}

const updateCar = async (req,res) => {
    const validation = carSchema.validate(req.body)
    if(validation.error){
        return res.status(400).send(validation.error.details[0].message)
    }
    const {name,year,color,isElectric}  = req.body
  


    const car = await CarModel.findByIdAndUpdate(req.params.id, {name,year,color,isElectric}, {
        new: true
    })
    res.send("Car updated successfully")
}

const deleteCar = async (req,res) => {

    const car = await CarModel.findByIdAndDelete(req.params.id)
    res.send("Car deleted successfully")
}


module.exports = {
    getAllCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar
}