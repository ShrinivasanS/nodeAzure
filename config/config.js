const env=require('dotenv');
env.config();
module.exports={
    port:process.env.SERVER_PORT
};