//importing express
const express = require('express');
const router = express.Router();

//importing functions in controller tasks.js file
const {get_all_tasks, 
        delete_item,
        get_single_item,
        add_new_item,
        edit_item,} = require('../controller/tasks');

router.route("/").get(get_all_tasks).post(add_new_item);
router.route("/:id").get(get_single_item).patch(edit_item).delete(delete_item);
module.exports = router