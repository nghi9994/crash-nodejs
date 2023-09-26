const express = require("express");

const app = express();

const auth = require("./routes/auth");
const people = require("./routes/people");

app.use([
  // static assets
  express.static("./methods-public"),
  // parse from data
  express.urlencoded({ extended: false }),
  // parse json
  express.json(),
]);

app.use("/api/people", people);
app.use("/login", auth);

app.listen(3001, () => {
  console.log("Server is listening on 3001...");
});
