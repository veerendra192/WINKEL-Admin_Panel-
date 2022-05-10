var express = require("express");
var app = express();
app.path = require("path");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(express.static("contents"));
var path = require('path')

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'template/forms')));
app.use(express.static(path.join(__dirname, '')));
app.use(express.static(path.join(__dirname, 'template')));
app.use(express.static(path.join(__dirname, 'template/assets/css/style.css')));
app.use(express.static(path.join(__dirname, 'template/pages/samples')));

// Mongodb Database Connection
const mongoose = require("mongoose");
const urlencoded = require("body-parser/lib/types/urlencoded");
mongoose.connect("mongodb+srv://saiprasad:saiprasad@cluster0.5mi0l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(() => {
    console.log("Successfully Connected To MongoDB Database.");
}).catch((e) => {
    console.log("Not Connected To MongoDB Database.");
})

const Connection = mongoose.Connection;
const addproductData = require('./schema/addproduct schema.js')
const logData = require('./schema/login schema.js');
const { collection } = require('./schema/login schema.js');

app.get("/login", function(req,res){
    res.sendFile(__dirname + "/pages/examples/login.html")
})

app.get("/dashboard", function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.get("/home", function(req,res){
    res.sendFile(__dirname + "/home.html");
});

app.get("/addproduct", function(req,res){
    res.sendFile(__dirname + "/pages/examples/add-product.html");
});

app.get("/editdeleteproduct", function(req,res){
    res.sendFile(__dirname + "/pages/examples/edit-delete-product.html");
});

app.get("/review", function(req,res){
    res.sendFile(__dirname + "/pages/examples/review.html");
});
app.get("/revenue", function(req,res){
    res.sendFile(__dirname + "/pages/examples/revenue.html");
});

app.listen(4000, ()=> console.log("Successfully Server Started"));