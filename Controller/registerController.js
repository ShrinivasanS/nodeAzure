const logger = require("../Config/logger")(module);
const { roles } = require("../Config/config");
const db = require("../Config/database");

const saveClient = (req, res) => {
    console.log("route to save client")
}

const saveCustomer = (req, res) => {
    console.log("to save customer")
}

const saveAdmin = async (req, res) => {
    logger.info("REST request to save admin details");
    var adminDetails = req.body;
    try {
        await db.query("BEGIN");
        var userInsert = 'INSERT INTO user_tbl(user_name,password,role) VALUES($1,$2,$3)';
        var userResult = await db.query(userInsert, [adminDetails.userName,
        adminDetails.password, roles.ADMIN]);
        logger.info(userResult);
        var clientInsert = 'INSERT INTO client_tbl(user_name,name) VALUES($1,$2)';
        var adminResult = await db.query(clientInsert, [adminDetails.userName,
        adminDetails.name])
        logger.info(`Admin ${adminResult}`);
        await db.query("COMMIT");

        res.status(200).json({
            message: "Admin Registered successfully"
        });
    } catch (error) {
        logger.error(error);
        await db.query("ROLLBACK");
        res.status(500).json({
            message: error
        });
    }
}

module.exports = {
    saveClient,
    saveCustomer,
    saveAdmin
}