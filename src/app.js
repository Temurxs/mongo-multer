const express = require('express');
const mongoose = require("mongoose")
const multer = require("multer")
const app = express()
const carRouter = require("./router/carRouter")
const userRouter = require("./router/userRouter")
 

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
// app.post("/cars/upload", upload.single("photo"), (req, res) => {
//     res.send("File uploaded successfully" + req.file.originalname)

// })








app.listen(3000, () => {
    console.log("Server is running on port 3000")
})


