const bookModel = require('../models/book.model')


class BookService {
   
    // create a book
    async create(BookData) {
        return await bookModel.create(BookData)
    }

    // Edit a book
    async update(id, BookData) {
        return await bookModel.findByAndUpdate(id, bookUpdate, {
            new: true
        })
    }

    // Delete a book
    async delete(id){
        return await bookModel.findByAndDelete(id)
    }

    // Get a single book 
    async get(id){
        return await bookModel.findById(id)
    }

    // Fetch all books
    async fetchAll(filter){
        return await bookModel.find(filter)
    }
}

module.exports = new BookService()