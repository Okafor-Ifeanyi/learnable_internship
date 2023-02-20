const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = require('./routes/index.route')

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/v1', router)

// const connect = process.env.MONGODB_URI
// console.log(connect)
db = process.env.MONGODB_URI
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})  
.then(() => {
    console.log("Database Connected!!")
})
.catch((err) => {
    console.log("There is an issue trying to connect to your database", err)
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})