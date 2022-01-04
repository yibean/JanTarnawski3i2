const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; 
// bardzo istotna linijka - port zostaje przydzielony przez Heroku
 
var name = {imie: "Jan", nazwisko: "Tarnawski", klasa: "3i2", grupa: "Ia"}

app.get("/data", function (req, res) {
    res.send(name);
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})