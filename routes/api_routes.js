const express = require('express')
const router = express.Router()
const Controller = require('../controller/controller')
//const cors = require('cors')

router.get('/', Controller.showIndex)

router.post('/add-todoitem', Controller.addTodoItem)

router.get('/get-todoitems',Controller.showTodoItems)

router.get('/get-todo/:id',Controller.getTodoItem)

router.put('/update-todo/:id', Controller.updateTodo)

router.delete('/delete-todo/:id', Controller.deleteTodo)

module.exports = router