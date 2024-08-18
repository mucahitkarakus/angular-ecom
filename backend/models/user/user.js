const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    _id: String,
    name: {
        type:String,
        required: true
    },
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    },
    createdDate: Date

})

const User = mongoose.model("User", UserSchema);

module.exports = User