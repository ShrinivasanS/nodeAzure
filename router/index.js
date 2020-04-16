const authenticate = require("./authRoutes");
const register=require("./registerRoutes");
const device=require("./deviceRoutes");
const express = require("express");
const routes = express.Router();

module.exports = function(app){

    app.use("/api",routes);

    authenticate(routes);
    
    register(routes);

    device(routes);
}