const {authController} = require("../Controller/index")

module.exports = (app)=>{
    app.get("/authenticate",authController.authenticate)
}