const mongoose = require("mongoose");
require('dotenv').config();

const uri = process.env.DB_URL;

const connection = () => {
    mongoose.connect(uri)
        .then(() => console.log("MongoDB bağlantı başarılı"))
        .catch((err) => console.log("Bağlantı Hatası: " + err.message));
}

module.exports = connection;
