const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var todo = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
	res.render("index", { todo: todo });
});
app.post("/", function (req, res) {
	post = req.body.todo;
	todo.push(post);
	res.redirect("/");
});
app.listen(3000);
