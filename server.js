// Bring in express so we can setup a new Express Application
const express = require("express");
//setup an express app
const app = express();
const Tea = require("./models/tea");

//Middlewares
// require DB connection
require("./db/connection");
// add a middle to allow json
// this adds json data into the req.body
app.use(express.json());
// add a middle to allow form data (from a html page)
// This adds the form data into the req.body variable
app.use(express.urlencoded({ extended: true }));

//Routes
app.get("/", (req, res) => {
  //render the home.ejs template
  res.render("home.ejs");
});

app.get("/teas", async (req, res) => {
  // get back all the teas from the database
  const allTeas = await Tea.find();
  // res.send(allTeas)
  res.render("index.ejs", { allTeas });
});

app.get("/teas/new", (req, res) => {
  // sends back the new tea form
  res.render("new.ejs");
});

app.post("/teas", async (req, res) => {
  // req.body will hold any data that was submitted from the form
  const newTea = await Tea.create(req.body);
  // direct the user to another / different url
  res.redirect("/teas");
});

app.listen(3000, () => console.log("Time for tea on port 3000"));
