//module
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();

//file
const rootDir = require("./util/path");
const routeGetData = require("./routes/getDate");
const routeTrack = require("./routes/trackName");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "welcome.html"));
});

app.use(routeGetData);
app.use(routeTrack);

app.use("/", (req, res, next) => {
  res.status(404).render("error", { title: "oops!" });
});

app.listen(3000, () => {
  console.log(`listening on http://localhost:3000`);
});
