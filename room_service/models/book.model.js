const mongoose = require('mongoose')

const Book = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
}) 
BookModel =  mongoose.model("Book", Book)
module.exports = BookModel