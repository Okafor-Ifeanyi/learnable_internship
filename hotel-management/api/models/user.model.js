const mongoose = require("mongoose");

const User = new Schema({
    username: {
        type: string,
        unique: true,
        required: true,
        trim: true
    },
    password:{
        type: password,
        require: true,
        min: 7,
        max: 30,
        trim: true
    },
    phoneNumber : {
        type: string,
        required: false,
        trim: true
    },
    isAdmin : {
        type: boolean,
        default: false,
    }
})

UserModel = mongoose.model("Users", User)
module.exports = UserModel