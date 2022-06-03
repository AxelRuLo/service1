var express = require('express');
var app = express();
var cors = require("cors")
const port = process.env.PORT || 3000
const login = require("./routes/login")



var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT, POST"
}


app.use(cors(corsOptions));


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/login", login)

app.listen(port, function () {
    console.log(`servicio 1 funcionando en el puerto ${port}`)
});