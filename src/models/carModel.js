const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
        // lowercase: true,
        // unique: true,
        // minLength: 3,
        // maxLength: 50,

    },
    year: {
        type: Number,
        required: true,
        min: 1886,
        max: new Date().getFullYear() 
    },
    color : {
        type: String,
        
    },

    isElectric: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps:true
    }
) 
  
const Car = mongoose.model("Car", carSchema)

module.exports = Car;

