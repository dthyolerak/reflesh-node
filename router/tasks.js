//importing express
const express = require('express');
const router = express.Router();

router.route("/").get( (req, res)=>{
    res.send("Hello from task ");
})
module.exports = router