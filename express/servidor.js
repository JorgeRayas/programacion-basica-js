const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/meche", function (req, res) {
    res.send("Meche esta dormida XD");
  });

app.listen(3000);
