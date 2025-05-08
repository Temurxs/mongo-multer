const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,

    },
    year: {
        type: Number,
        required: true,
        min: 1886,
        max: new Date().getFullYear() 

    },
    color : {
        type: String,
        required: true,
        enum: ['red', 'blue', 'green', 'black', 'white', 'yellow', 'silver', 'gray'],
        default: 'white'
        
    },

    isElectric: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
},
    {
        timestamps:true
    }
) 
  
const Car = mongoose.model("Car", carSchema)

module.exports = Car;

