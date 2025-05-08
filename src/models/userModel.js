const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
      
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 15
    },
    avatarPhoto:{
        type:String
    }
}, {
    timestamps:true
})

const User = mongoose.model("User", userSchema)

module.exports = User;