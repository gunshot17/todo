const connection = require("../db/mysql_connection");

// @desc    모든 할일 가져오기
// @route   GET /api/v1/todo
//@request offset, limit
//@response success, items, cnt

exports.getTodos = async (req, res, next) => {
    let offset = Number(req.query.offset);
    let limit = Number(req.query.limit);

    let query = "select * from todo limit ?,?;"
    let data = [offset, limit]
    try {
        [rows] = await connection.query(query, data);
        let cnt = rows.length;
        res.status(200).json({ success: true, items: rows, cnt: cnt });
    } catch (e) {
        res.status(500).json({ error: e })
    }
};

//@desc  완료 여부 확인
//@route POST api/v1/todo/check
//@request completed , id
//@response success

exports.checkTodo = async (req, res, next) => {
    let completed = req.body.completed;
    let id = req.body.id;

    let query = "update todo set completed = ? where id = ?;"
    let data = [completed, id]

    try {
        [result] = await connection.query(query, data);
        res.status(200).json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e })

    }
};



