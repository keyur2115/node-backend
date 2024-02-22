const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config();

PORT = process.env.PORT || 8000;

mongoose.connect(`${process.env.URL}/task-list`).then(() => {
	console.log("Database connected")
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


require('./app/routes/routes')(app);


app.listen(PORT, "192.168.1.34", () => {
	console.log(`app is running on port http://192.168.1.34:${PORT}`)
})