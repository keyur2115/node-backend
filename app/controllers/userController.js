const userSchema = require('../models/user.model.js');


exports.addUser = async (req, res) => {
   console.log("req file", req.file);
	try {
		req.body = JSON.parse(req.body.data);
		req.body.image = req.file.filename;
		await userSchema.create(req.body).then((resp) => {
			if(resp){
				
				res.json({
					data: resp,
					status: true,
					message: "Data Added successfully"
				})
			}else {
				res.json({
					status: false,
					message: "Data addition failed"
				})
			}
		})
	}

	catch(err){
		console.log("addUser error", err.message);
	}
}

exports.getUser = async (req, res) => {
	try {
		await userSchema.find().then((resp) => {
			if(resp){
				res.json({
					data:resp,
					message:"Data fetched successfully",
					status: true
				})
			}else {
				res.json({
					message:"Data Fetching unsuccessful",
					status:false
				})
			}
		})
	}
	catch(err){
		console.log("get user Data fetching error", err.message);
	}
}

exports.deleteUserById = async (req, res) => {
	try {
		await userSchema.deleteOne(req.params).then((resp) => {
			if(resp) {
				res.json({
					data: resp,
					message:"User Deleted Successfully",
					status: true
				})
			} else {
				res.json({
					message: "User deletion unsuccessful",
					status: false
				})
			}
		})
	}
	catch(err){
		console.log("user Delete error", err.message);
	}
}


exports.getUserById = async (req, res) => {
	try {
		await userSchema.findOne(req.params).then((resp) => {
			if(resp){
				res.json({
					data:resp,
					message: "Required user found",
					status: true
				})
			} else {
				res.json({
					message: "User not found",
					status: false
				})
			}
		})
	}

	catch(err) {
		console.log("get User by id error", err.message);
	}
}

exports.updateUser = async (req, res) => {
	console.log("updateuser", req.body);
	try {
		req.body = JSON.parse(req.body.data);
		req.body.image = req.file.filename;
		await userSchema.findOneAndUpdate({_id:req.body._id}, req.body, {new:true}).then((resp) => {
			if(resp){
				res.json({
					data: resp,
					message: "user updated successfully",
					status: true
				})
			} else{
				res.json({
					message: "user update unsuccessful",
					status: false
				})
			}
		})
	}

	catch(err) {
		console.log("error in updateUser", err.message)
	}
}