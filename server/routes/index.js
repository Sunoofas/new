const express = require("express");
const router = express.Router();
const todo = require('../controllers/todo');


//Todo 
router.post('/todo', todo.putTask);
router.get('/todo', todo.getTask);


//convertor



module.exports = router;