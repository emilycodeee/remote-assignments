const express = require("express");
const route = express.Router();

route.get("/myName", (req, res) => {
  const { name } = req.cookies;
  res.render("myName", { name, title: "Track Name" });
});

route.get("/trackName", (req, res) => {
  const { name } = req.query;
  res.cookie("name", name);
  res.redirect("/myName");
});

route.post("/logout", (req, res) => {
  res.clearCookie("name");
  res.redirect("/myName");
});

module.exports = route;
