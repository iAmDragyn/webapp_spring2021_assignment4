"use strict";

const mongoose = require("mongoose"),
    User = require("./models/user");

mongoose.connect(
    "mongodb://localhost:27017/lets_take_a_selfie",
    { useNewUrlParser: true }
);
mongoose.connection;

var contacts = [
    {
        firstName: "John",
        lastName: "Vexler",
        dateOfBirth: "07/31/2015",
        username: "jvexler",
        email: "johnv15@email.com",
        password: "pass",
        securityQuestion1: "1",
        securityAnswer1: "red robin",
        securityQuestion2: "2",
        securityAnswer2: "toyota sienna",
        securityQuestion3: "5",
        securityAnswer3: "mom"
    },
    {
        firstName: "Jessica",
        lastName: "Vexler",
        dateOfBirth: "12/20/1990",
        username: "jvex44",
        email: "jvex44@gmail.com",
        password: "password",
        securityQuestion1: "3",
        securityAnswer1: "mandy",
        securityQuestion2: "5",
        securityAnswer2: "cherry creek",
        securityQuestion3: "1",
        securityAnswer3: "pickles"
    },
    {
        firstName: "Daniel",
        lastName: "Brown",
        dateOfBirth: "04/09/1998",
        username: "danbrown",
        email: "soccerguy22@mail.com",
        password: "passypass",
        securityQuestion1: "3",
        securityAnswer1: "red cherries",
        securityQuestion2: "2",
        securityAnswer2: "my laptop",
        securityQuestion3: "4",
        securityAnswer3: "colorado"
    }
];

User.deleteMany()
    .exec()
    .then(() => {
        console.log("User data is empty!");
    });

var commands = [];

contacts.forEach(c => {
    commands.push(
        User.create({
            firstName: c.firstName,
            lastName: c.lastName,
            dateOfBirth: c.dateOfBirth,
            username: c.username,
            email: c.email,
            password: c.password,
            securityQuestion1: c.securityQuestion1,
            securityAnswer1: c.securityAnswer1,
            securityQuestion2: c.securityQuestion2,
            securityAnswer2: c.securityAnswer2,
            securityQuestion3: c.securityQuestion3,
            securityAnswer3: c.securityAnswer3
        })
    );
});

Promise.all(commands)
    .then(r => {
        console.log(JSON.stringify(r));
        mongoose.connection.close();
    })
    .catch(error => {
        console.log(`ERROR: ${error}`);
    });
