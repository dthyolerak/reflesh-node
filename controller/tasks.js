const { json } = require("express");

const get_all_tasks = (req, res)=>{
    res.send("Hello from task");
}


const get_single_item = (req, res) =>{
    res.send("hello from single item")
}

const add_new_item = (req, res)=>{
    res.json(req.body);
}

const edit_item = (req,res)=>{
    res.send("hello from edit item")
}

const delete_item = (req, res) =>{
    res.send("hello from delete method")
}
module.exports = {
    get_all_tasks,
    get_single_item,
    add_new_item,
    edit_item,
    delete_item,
}