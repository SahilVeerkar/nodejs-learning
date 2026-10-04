const express = require("express");

const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  res.render("home", {
    name: "Sahil",
    age:"23",
    city:"Indore"
  });
});

module.exports = homeRouter;