const express = require("express");
const app = express();

const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PATH = 3000;

app.get("/",(req,res)=>{
    res.render("index", {message: "EJS rocks!"});
})
app.get("/about",(req,res)=>{
    res.render("about", {info: "About page is Exx!"})
})

app.listen(PATH,()=>{
    console.log(`Your app is running on localhost ${PATH}`);
})