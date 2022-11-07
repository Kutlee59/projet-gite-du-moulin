const express = require('express')

const app = express()

app.use(express.static("public"))

app.get("/index",(req, res) => {
    res.render("index.ejs")
})

app.get("/Contact",(req, res) => {
    res.render("Contact.ejs")

})
app.get("/Gîtes",(req, res) => {
    res.render("Gîtes.ejs")

})
app.get("/Services",(req, res) => {
    res.render("Services.ejs")

})
app.get("/Studios",(req, res) => {
    res.render("Studios.ejs")

})
app.get("/Tourisme",(req, res) => {
    res.render("Tourisme.ejs")

})

app.listen(8080)