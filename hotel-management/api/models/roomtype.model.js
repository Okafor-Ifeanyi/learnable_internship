const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomType = new Schema({
    name: {
        type: String,
        default: "single",
        required: true
    },
})

const RoomType = mongoose.model("room-type", roomType)
module.exports = RoomType