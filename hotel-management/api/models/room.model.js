const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Hotel = new Schema({
    name: {
        type: String,
        required: true
    },
    roomType: {
        type: ObjectId,
        required: true,
        ref: "RoomType"
    },
    price: {
        type: Number,
        default: 0,
        required: true
    }
})

const HotelName = mongoose.model("rooms", Hotel)

module.exports = HotelName 