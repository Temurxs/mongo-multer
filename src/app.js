const express = require('express');
const mongoose = require("mongoose")
const multer = require("multer")
const app = express()
const carRouter = require("./router/carRouter")
const userRouter = require("./router/userRouter");
const { PORT, MONGO_URI } = require('./config/env.variables');
 
 
 
mongoose.connect(MONGO_URI)
  .then(() => console.log(' Connected to MongoDB'))

 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage: storage })



app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/cars", carRouter)
app.use("/users", userRouter)









app.listen(PORT, () => {
    console.log("Server is running on port 3000")
})


