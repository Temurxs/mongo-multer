const mongoose = require('mongoose');
const multer = require('multer');
const userModel = require('../models/userModel');
const userSchema = require("../DTO/user.dto");
const { SECRET_KEY_ACCESS_TOKEN, SECRET_KEY_REFRESH_TOKEN } = require('../config/env.variables');
const jwt = require("jsonwebtoken")


const getAllUsers = async (req, res) => {
    const users = await userModel.find();
    res.send(users);
}

const getUserById = async (req, res) => {
    const user = await userModel.findById(req.params.id);
    res.send(user)
}

const createUser = async (req, res) => {

    const dataToValidate = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatarPhoto: req.file.path
    }
    if (req.file) {
        req.body.avatarPhoto = {
            originalname: req.file.originalname,
            mimetype: req.file.mimetype,
            size: req.file.size
        };


        const validation = await userSchema.validateAsync(dataToValidate)
        if (validation.error) {
            return res.status(400).send(validation.error.details[0].message)
        }


        const user = new userModel({
            name: dataToValidate.name,
            email: dataToValidate.email,
            password: dataToValidate.password,
            avatarPhoto: dataToValidate.avatarPhoto

        })
        await user.save();

        const accesToken = jwt.sign({ id: user._id }, SECRET_KEY_ACCESS_TOKEN, { expiresIn: "15m" })
        const refreshToken = jwt.sign({ id: user._id }, SECRET_KEY_REFRESH_TOKEN, { expiresIn: "1hz" })

        res.status(201).send({ message: "User created successfully", accessToken: accesToken, refreshToken: refreshToken })
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id
    const dataToValidate = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatarPhoto: req.file?.path || null

    }
    const { name, email, password, avatarPhoto } = dataToValidate;

    const validation = await userSchema.validateAsync(dataToValidate)
    if (validation.error) {
        return res.status(400).send(validation.error.details[0].message)
    }

    const user = await userModel.findByIdAndUpdate(id, { name, email, password, avatarPhoto }, {
        new: true
    })
    res.send("User updated successfully")
}

const deleteUser = async (req, res) => {
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