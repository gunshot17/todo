const express = require("express");
const dotenv = require("dotenv");
const todo = require("./routes/todo")

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());

app.use("/api/v1/todo", todo);

const PORT = process.env.PORT || 5777;
app.listen(PORT, console.log("서버 실행됨"));