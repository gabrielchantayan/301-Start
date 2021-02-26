const express = require("express");
const path = require("path");
const app = express();

var appList = require("./apps.json");
var config = require("./config.json");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index", {appList: appList, config: config}); 
});

app.listen(301, () => {
    console.log("server started on port 301");
});