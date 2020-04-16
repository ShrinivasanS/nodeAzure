const {registerController} = require("../Controller/index")

module.exports=(app)=>{
    
    app.route("/clients")
        .post(registerController.saveClient);





    app.route("/customers")
        .post(registerController.saveCustomer);


    app.route("/admin")
        .post(registerController.saveAdmin);

}