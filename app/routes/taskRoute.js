const express = require('express');
const route = express.Router();
const controller = require('../controllers/taskController');

route.get('/get-task', controller.getTask);
route.post('/add-task', controller.addTask);
route.delete('/task', controller.deleteAllTask);
route.delete('/task/:_id', controller.deleteOneTask);
route.put('/update-task', controller.updateTask);

module.exports = route;