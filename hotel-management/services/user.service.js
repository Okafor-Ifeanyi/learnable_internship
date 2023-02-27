const user = require('../models/book.model')


class userService {
   
    // create a book
    async signup(data) {
        return await room.create(data)
    }

    // Edit a book
    async login(id, data) {
        return await room.findByAndUpdate(id, data, {
            new: true
        })
    }

    // Delete a book
    async delete(id){
        return await room.findByAndDelete(id)
    }

    // Get a single book 
    async get(filter){
        return await room.findOne(filter)
    }

    // Fetch all books
    async fetchAll(filter){
        return await room.find(filter)
    }
}

module.exports = new userService()