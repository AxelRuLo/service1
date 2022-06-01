var express = require('express');
var app = express();
const port = process.env.PORT || 3000
const login = require("./routes/login")



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/login", login)

app.listen(port, function () {
    console.log(`servicio 1 funcionando en el puerto ${port}`)
});