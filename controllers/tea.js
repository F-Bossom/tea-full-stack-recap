// express router - Attach routes in a different file
const express = require("express");
const router = express.Router();
const Tea = require("../models/tea");

// I.N.D.U.C.E.S
// Index
router.get("/teas", async (req, res) => {
  // get back all the teas from the database
  const allTeas = await Tea.find();
  // res.send(allTeas)
  res.render("index.ejs", { allTeas });
});

// New
router.get("/teas/new", (req, res) => {
  // sends back the new tea form
  res.render("new.ejs");
});

// Delete
router.delete("/teas/:id", async (req, res) => {
  await Tea.findByIdAndDelete(req.params.id);
  res.redirect("/teas");
});

// Update
router.put("/teas/:id", async (req, res)=>{
  await Tea.findByIdAndUpdate(req.params.id, req.body)
  res.redirect(`/teas/${req.params.id}`)
})

// Create
router.post("/teas", async (req, res) => {
  // req.body will hold any data that was submitted from the form
  const newTea = await Tea.create(req.body);
  // direct the user to another / different url
  res.redirect("/teas");
});

// EDIT
router.get("/teas/:id/edit", async (req, res)=>{
  const tea = await Tea.findById(req.params.id)

  res.render("edit.ejs", {tea})

})

// SEED
// add data we can play around with
router.get("/teas/seed", async (req, res) => {
const teas = [
  {
    name: "orange pekoe",
    size: "Large",
    description: "black tea",
    teaImage:
      "https://raw.githubusercontent.com/teastore/images/main/orange-pekoe.jpg",
  },
  {
    name: "earl grey",
    size: "Large",
    description: "black tea with bergamot",
    teaImage:
      "https://raw.githubusercontent.com/teastore/images/main/earl-grey.jpg",
  },
  {
    name: "english breakfast",
    size: "Large",
    description: "strong and bold black tea",
    teaImage:
      "https://raw.githubusercontent.com/teastore/images/main/english-breakfast.jpg",
  },
  {
    name: "green tea",
    size: "Medium",
    description: "light and refreshing tea",
    teaImage:
      "https://raw.githubusercontent.com/teastore/images/main/green-tea.jpg",
  },
  {
    name: "jasmine green",
    size: "Medium",
    description: "green tea scented with jasmine",
    teaImage:
      "https://raw.githubusercontent.com/teastore/images/main/jasmine-green.jpg",
  },
  {
    name: "chai",
    size: "Large",
    description: "spiced black tea",
    teaImage:
      "https://raw.githubusercontent.com/teastore/images/main/chai.jpg",
  },
  {
    name: "peppermint",
    size: "Small",
    description: "cool and minty herbal tea",
    teaImage:
      "https://raw.githubusercontent.com/teastore/images/main/peppermint-tea.jpg",
  },
  {
    name: "chamomile",
    size: "Small",
    description: "calming herbal tea",
    teaImage:
      "https://raw.githubusercontent.com/teastore/images/main/chamomile.jpg",
  },
  {
    name: "oolong",
    size: "Medium",
    description: "smooth semi-oxidized tea",
    teaImage:
      "https://raw.githubusercontent.com/teastore/images/main/oolong.jpg",
  },
  {
    name: "matcha",
    size: "Small",
    description: "finely ground green tea powder",
    teaImage:
      "https://raw.githubusercontent.com/teastore/images/main/matcha.jpg",
  },
];

// some seed routes also clear the database
await Tea.deleteMany()
  await Tea.create(teas);

  res.redirect("/teas")
});

// Show /teas/:id
router.get("/teas/:id", async (req, res) => {
  // get tea back from the db using the param id
  const tea = await Tea.findById(req.params.id);
  // send back a tea and the tea show page
  res.render("show.ejs", { tea });
});

// make this available in server.js
module.exports = router;
