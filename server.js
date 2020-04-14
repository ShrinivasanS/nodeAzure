var express = require('express');

var port=process.env.PORT||2600;
var app = express();
var router=require("./router")(app);
app.listen(port,()=>{
    console.log("Server is listening in the port ",2600)
})
