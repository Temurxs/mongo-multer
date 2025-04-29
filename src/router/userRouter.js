const express = require('express');
const userRouter = express.Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controller/userController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    }
  });
const upload = multer({ storage: storage })

userRouter.get("/", getAllUsers )
userRouter.get("/:id", getUserById)
userRouter.post("/",upload.single("avatarPhoto"), createUser) 
userRouter.put("/:id", upload.single("avatarPhoto"), updateUser)
userRouter.delete("/:id", deleteUser)

module.exports = userRouter;
