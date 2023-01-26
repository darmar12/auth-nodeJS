require('dotenv').config({path: process.env.DOTENV || '.env'});

module.exports = {
    port: process.env.PORT,
    JWT_SALT: process.env.JWT_SALT,
    MONGO_URI: process.env.MONGO_URI
}
