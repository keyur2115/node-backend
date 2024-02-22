const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	name:String,
	isChecked:Boolean
},{timeStamps: true})

module.exports = mongoose.model('task', taskSchema);