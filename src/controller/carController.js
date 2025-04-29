const CarModel = require('../models/carModel');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => console.log(' Connected to MongoDB'))

 

const getAllCars = async (req, res) => {
    const cars = await CarModel.find();
    res.send(cars);

}

const getCarById = async (req, res) => {
    const car = await CarModel.findById(req.params.id);
    res.send(car)
}

const createCar = async (req, res) => {
    console.log(req.body)
    const name  = req.body.name
    const year = req.body.year
    const color = req.body.color
    const isElectric = req.body.isElectric
    const car = new CarModel({
        name,
        year,
        color,
        isElectric
    })
    await car.save();
    res.send("Car created successfully")
}

const updateCar = async (req,res) => {
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