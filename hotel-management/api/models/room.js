const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Hotel = new Schema({
    _id: {type: ObjectId},
    name: {type: String, required: true},
    roomType: {type: ObjectId, required: true, ref: "RoomType"},
    price: {type: Number, default: 0, required: true}
})

const HotelName = mongoose.model("rooms", Hotel)

module.exports = HotelName 