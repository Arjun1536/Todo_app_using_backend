const express = require('express')
const router = express.Router()

const {createTodo} = require('../controllers/createTodo')

// get route
const {getTodo,getTodoid,updatedTodo,deleteTodo} = require('../controllers/getTodo')

//define API route
router.post('/createTodo',createTodo)
router.get('/getTodo',getTodo)
router.get('/getTodo/:id',getTodoid)
router.put('/getTodo/:id',updatedTodo)
router.delete('/getTodo/:id',deleteTodo)

module.exports = router;