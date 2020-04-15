var express = require('express');
const {port}=require('./config/config');
var app = express();
var router=require("./router")(app);
app.listen(port,()=>{
    console.log("Server is listening in the port ",port)
})
