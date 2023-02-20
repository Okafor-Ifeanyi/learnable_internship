const router = require("express").Router()
const bookRouter = require('./book.route')

router.use('/book', bookRouter)

module.exports = router; 