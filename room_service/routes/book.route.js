const router = require("express").Router()

const { createBook,
    updateBook,
    deleteBook,
    getOneBook,
    fetchAll
    } = require('../controllers/book.controller')

router.post('/', createBook)
router.patch('/:id', updateBook) 
router.delete('/:id', deleteBook)
router.get('/:id', getOneBook)
router.get('/', fetchAll)

module.exports = router