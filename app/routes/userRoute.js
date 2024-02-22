// userRoutes.js
const express = require('express');
const route = express.Router();
const userController = require('../controllers/userController')
const upload = require('../middleware/multerConfig');

const path = require('path');

// Serve static files from the "uploads" folder
route.use('/uploads', express.static(path.join(__dirname, '../../uploads')));

route.get('/get-user', userController.getUser);
route.post('/add-user', upload.single('image'), userController.addUser);
route.delete('/user/:_id', userController.deleteUserById);
route.get('/user', userController.getUserById);
route.put('/update-user', upload.single('image'), userController.updateUser);


module.exports = route;
