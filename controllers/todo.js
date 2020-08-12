const connection = require("../db/mysql_connection");

// @desc    모든 할일 가져오기
// @route   GET /api/v1/todo
//@response offset, limit

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

  //@desc