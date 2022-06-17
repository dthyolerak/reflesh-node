//importing express
const express = require('express');
const router = express.Router();
const {all_tasks} = require('../controller/tasks')
router.route("/").get(all_tasks)
module.exports = router