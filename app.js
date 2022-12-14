var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//var hike = require("./routes/hike");

//var indexRouter = require("./routes/index");
//var usersRouter = require("./routes/users");

var app = express();
// TODO add routes, configure db, connect to front end

// view engine setup
//app.set("views", path.join(__dirname, "views"));
//app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "/client/", "build")));
app.use("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "/views", "index.html"));
});
//app.get("/hikes", hike.index);
//app.post("/add_hike", hike.add_hike);

//app.get("/", (req, res) => {
//	res.send("request sent");
//	//res.json();
//});
app.get("/flower", (req, res) => {
	res.json({
		name: "Tulip",
		colour: "Blue-ish",
	});
	console.log(res.json);
});

// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//	next(createError(404));
//});

//// error handler
//app.use(function (err, req, res, next) {
//	// set locals, only providing error in development
//	res.locals.message = err.message;
//	res.locals.error = req.app.get("env") === "development" ? err : {};

//	// render the error page
//	//res.status(err.status || 500);
//	//res.render("error");
//});

module.exports = app;
