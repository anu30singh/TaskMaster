const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModal= require ('./Modal/todo')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/Test')

app.post('/add' , (req,res)=> {
    const task = req.body.task;
    TodoModal.create({
        task: task
    }).then(result=> res.json(result))
    .catch(err=>res.json(err))
})


app.listen(3001, ()=> {
    console.log("Server is running")
})