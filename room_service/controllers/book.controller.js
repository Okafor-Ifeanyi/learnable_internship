const BookService = require('../services/book.service')

class BookController {

    async createBook(req, res){
        const reqBody = req.body

        // Check if book exists
        const existingBook = await BookService.get({
            name: reqBody.name.toLowercase()
        })

        if (existingBook) res.status(403).json({
            success: false,
            message: "Book already exist"
        })

        const newBook = await BookService.create(reqBody)

        res.status(201).json({
            success: false,
            message: "Book created successfully",
            data: newBook
        })
    }

    // Update a book

    async updateBook(req, res){
        const bookID = req.params.id
        const updateData = req.body
        // Check if the book exists
        const existingBook = await BookService.get({
            _id: bookID
        })
        if (!existingBook) res.status(403).json({
            success: false,
            message: "Book already exist"
        })

        // Since the name is a unique key, we have to make it consistent 
        if (updateData.name) {
            const existingBookWithTheUpdateName = await BookService.fetchAll({
                name: updateData.name.toLowercase()
            })

            if (existingBookWithTheUpdateName._id.toString() != existingBook._id.toString()){
                res.status(403).json({
                    success: false,
                    message: 'Book with update name already exists'
                })
            }
        }

        const updatedData = await BookService.update(bookID, updateData)
        
        res.status(200).json({
            success: false,
            mesage: 'Body updated successfully',
            data: updatedData
        })
    }

    async deleteBook(req, res){
        const bookID = req.params.id

        // Check if the book to delete is the database
        const existingBook = await BookService.get({
            _id: bookID
        })
 
        if (!existingBook) res.status(403).json({
            success: false,
            message: 'Book to edit does not exist'
        })

        const deleteBook = await BookService.delete(bookID)

        res.status(200).json({
            success: false,
            message: 'Book deleted successfully',
            data: deleteBook
        })
    }

    // Fetch a single book

    async getOneBook(req, res){
        const bookID = req.params.id

        // Check if the book to delete is the database
        const existingBook = await BookService.get({
            _id: bookID
        })

        if (!existingBook) res.status(403).json({
            success: false,
            message: 'Book to edit does not exist'
        })

        res.status(201).json({
            success: false,
            message: 'Book Fetched successfully',
            data: existingBook
        })
    }

    async fetchAll(req, res){
        const existingBook = await BookService.fetchAll({})

        res.status(200).json({
            success: false,
            message: 'Book fetched successfully',
            data: existingBook
        })
    }
}   

module.exports = new BookController()