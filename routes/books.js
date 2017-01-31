var express = require('express');
var router = express.Router();
const books = require('../controller/book')

/* GET users listing. */
router.post('/', books.insertData)
router.get('/', books.showData)
router.get('/:id', books.showDataById)
router.get('/isbn/:isbn', books.showDataByIsbn)


module.exports = router;
