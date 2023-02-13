const mongoose = require("mongoose");
const Schema = mongoose.Schema
const connectionUrl = "mongodb://127.0.0.1:27017";

mongoose.connect(connectionUrl, {
    dbName: "hotel-room",
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log("Success")
    } else {
        console.log("Error")
    }
});