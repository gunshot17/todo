const express = require("express");
const router = express.Router();
const {
    getTodos, checkTodo
} = require("../controllers/todo");

router.route("/").get(getTodos);
router.route("/check").post(checkTodo);

module.exports = router;