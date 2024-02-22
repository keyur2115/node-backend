const taskSchema = require('../models/task.model');

exports.addTask =  async (req, res) => {

	try {
		await taskSchema.create(req.body).then((response) => {
			if(response){
				res.json({
					data: response,
					message:"Task added successfully",
					status:true,
				})
			}else {
				res.json({
					status: false,
					message: "Problem in task addition"
				})
			}
		})
		}
	catch(err){
		console.log("task table Error", err);
	}
}


exports.getTask = async (req, res) => {
	try{
		await taskSchema.find().then((response) => {
			if(response){
				res.json({
					data: response,
					message:"Data Fetched successfully", 
					status: true
				})
			}else {
				res.json({
					status: false,
					message: "Data fetching unsuccessful"
				})
			}

		})
	}
	catch(err){
		console.log("get Data api error", err);
	}
}


exports.deleteOneTask = async (req, res) => {
	try {
		await taskSchema.deleteOne(req.params).then((resp) => {
			if(resp){
				res.json({
					data:resp,
					message:"Task deleted Successfully",
					status:true
				})
			}else {
				res.json({
					status:false,
					message: "Problem in Deletion of task"
				})
			}
		})
	}
	catch(err){
		console.log("delete task by id error", err);
	}
}


exports.deleteAllTask = async (req, res) => {
	try {
		await taskSchema.deleteMany().then((resp) => {
			if(resp){
				res.json({
					message:"All Task Deleted Successfully",
					status:true
				})
			} else {
				res.json({
					message:"Problem in deletion of task",
					status: false
				})
			}
		})
	}
	catch(err){
		console.log("delete all task error", err);
	}
}


// exports.taskCheck = async (req, res) => {
// 	try {
// 		await taskSchema.findOneAndUpdate({_id:req.body._id}, req.body).then((resp) => {
// 			console.log("resp of find one task", resp);
// 			if(resp){
// 				res.json({
// 					data: resp,
// 					message: "Data updated successfully",
// 					status: true,
// 				})
// 			}


// 		})
// 	}
// 	catch(err){

// 	}
// }

exports.updateTask = async (req, res) => {
	console.log("updateTask", req.body)
	try {
		await taskSchema.findOneAndUpdate({_id:req.body._id}, req.body, {new:true}).then((resp) => {
			console.log("resp of update task", resp);
			if(resp){
				res.json({
					data: resp,
					message: "Data updated successfully",
					status: true,
				})
			}
		})
	}

	catch(err) {
		console.log("update error", err);
	}
}