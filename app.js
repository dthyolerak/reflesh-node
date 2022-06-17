const express = require('express');
//importing express server
const exoress =require('express');
const app = express();
//hardcoding port number
const port = 3000;
//listen to port
app.listen(port , console.log(`Welcome to task manager on port ${port}`));

//router
app.get('/task-manager', (req, res) =>{
    res.send("Welcome to task manager app");
})
