// Bring in express so we can setup a new Express Application
const express = require("express");
//setup an express app
const app = express();
const teaController = require("./controllers/tea")
const method0verride = require("method-override")

//Middlewares
// require DB connection
require("./db/connection");
// add a middle to allow json
// this adds json data into the req.body
app.use(express.json());
// add a middle to allow form data (from a html page)
// This adds the form data into the req.body variable
app.use(express.urlencoded({ extended: true }));
// add in static / public setup
app.use(express.static("public"))
app.use(method0verride("_method"))

//Routes
app.get("/", (req, res) => {
  //render the home.ejs template
  res.render("home.ejs");
});

// attach tea routes to our app
app.use(teaController)

app.listen(3000, () => console.log("Time for tea on port 3000"));
