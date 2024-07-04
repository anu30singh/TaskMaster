const mongoose = require('mongoose');
const {MONGO_URI} = require('../config');
const { configDotenv } = require('dotenv');
mongoose.connect(MONGO_URI).then(()=>console.log("DB connected"))
.catch((err)=> console.log("db not connected"))


const ToDoSchema = new mongoose.Schema({
    username: String,
    password: String,
    todos:[{
        title: String,
        description: String
    }]
});


const Todos =mongoose.model('Todos',ToDoSchema);
module.exports = Todos;