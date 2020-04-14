var express = require('express');

var app = express();
var router=require("./router")(app);
app.listen(2600,()=>{
    console.log("Server is listening in the port ",2600)
})
