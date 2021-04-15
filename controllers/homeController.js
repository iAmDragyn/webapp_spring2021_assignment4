exports.showIndex = (req, res) => {
    res.render("index")
}

// search
exports.showResults = (req, res) => {
    res.render("search")
}

// settings
exports.showSettings = (req, res) => {
    res.render("settings")
}

//account
exports.showAccount = (req, res) => {
    res.render("account")
}