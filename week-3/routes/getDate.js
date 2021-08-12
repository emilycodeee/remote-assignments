const express = require("express");
const route = express.Router();

route.get("/getData", (req, res, next) => {
  const { number } = req.query;
  let answer = "";

  const converNum = Number(number);
  if (!number) {
    answer = "Lack of Parameter";
  } else if (!Number.isFinite(converNum)) {
    answer = "Wrong Parameter";
  } else if (converNum < 0) {
    answer = "Please enter a positive integer";
  } else {
    answer = ((1 + converNum) * converNum) / 2;
  }
  res.render("getData", { answer, title: "Get Number" });
});

module.exports = route;
