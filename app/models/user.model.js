const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
	username:{
		type: String,
		required: false,
	},

	department: {
		 type: String, 
		 required: false
	},

	gender: {
		type: String,
		required: false
	},

	image:{
		type:String,
		required: false
	},

	status:{
		type:String,
		required: false
	},

}, {timeStamps:true});

module.exports = mongoose.model('user', userSchema);