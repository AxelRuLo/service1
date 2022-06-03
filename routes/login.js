const express = require('express');
const ruta = express.Router();

ruta.get("/acces/:email/:password",function (req,res) {
    let email = req.params.email;
    let password = req.params.password;

    if(email.includes("@") && password.includes("AP")){
        res.send(true);
    }else{
        res.status(403).send(false)
    }
    
})

module.exports = ruta;