const dotenv = require('dotenv');

dotenv.config();



module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    SECRET_KEY_ACCESS_TOKEN: process.env.SECRET_KEY_ACCESS_TOKEN,
    SECRET_KEY_REFRESH_TOKEN: process.env.SECRET_KEY_REFRESH_TOKEN,
}

