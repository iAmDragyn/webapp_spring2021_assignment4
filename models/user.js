const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose"),
    { Schema } = require("mongoose")

userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },

    // Maybe remove?
    securityQuestion1: String,
    securityAnswer1: String,
    securityQuestion2: String,
    securityAnswer2: String,
    securityQuestion3: String,
    securityAnswer3: String,
    },
    {
        timestamps: true
    }
);

userSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
});

module.exports = mongoose.model("User", userSchema);