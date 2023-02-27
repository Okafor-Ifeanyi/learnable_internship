const express = require("express");
const mongoose = require('mongoose')
const RoomRouter = require("./routers/room");
const RoomTypeRouter = require("./routers/roomtype");
// const UserRouter = 
const app = express();

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(RoomRouter);
app.use(RoomTypeRouter);

mongoose.connect(process.env.MONGODB_URI_offline, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  family: 4
})
  .then(() => { 
    console.log("Connected!!")
  })
  .catch((err) => {
    console.log("There is an issue trying to connect to your database", err)
  }) 

app.listen(port, () => {
  console.log("Success");
}); 

const port = process.env.PORT || 3000;

// The best way
