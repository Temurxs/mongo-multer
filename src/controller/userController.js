const mongoose = require('mongoose');
const multer = require('multer');
const userModel = require('../models/userModel');

mongoose.connect('mongodb://localhost:27017/mydatabase', )
  .then(() => console.log(' Connected to MongoDB'))

  const getAllUsers = async (req, res) => {
    const users = await userModel.find();
    res.send(users);
  }

    const getUserById = async (req, res) => {
        const user = await userModel.findById(req.params.id);
        res.send(user)
    }

    const createUser = async (req, res) => {
        const name  = req.body.name
        const email = req.body.email
        const password = req.body.password
        const avatarPhoto = req.file.path
        const user = new userModel({
            name,
            email,
            password,
            avatarPhoto
     
        })
        await user.save();
        res.send("User created successfully")
    }

    const updateUser = async (req,res) => {
        const name  = req.body.name
        const email = req.body.email
        const password = req.body.password
        const avatarPhoto = req.file.path
        console.log(req.file.path);
        

        const user = await userModel.findByIdAndUpdate(req.params.id, {name,email,password,avatarPhoto}, {
            new: true
        })
        res.send("User updated successfully")
    }

    const deleteUser = async (req,res) => {
        const user = await userModel.findByIdAndDelete(req.params.id)
        res.send("User deleted successfully")
    }

    module.exports = {
        getAllUsers,
        getUserById,
        createUser,
        updateUser,
        deleteUser
    }