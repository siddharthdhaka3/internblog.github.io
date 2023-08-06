const { error } = require("jquery");
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email");
            }
        }

    },
    phone:{
        type:Number,
        required:true,
        min:10
    },

    message:{
        type:String,
        required:true,
        minLength:3
    }
})

const User = mongoose.model("USER", userSchema);
module.exports = User;