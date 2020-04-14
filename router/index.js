var controller= require("../controller/indexController")

module.exports = function(app){
    app.get("/hello",controller.hello);
    
}