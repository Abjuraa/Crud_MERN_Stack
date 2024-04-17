const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.end("Bienvenidos al servidor Backend Node.js.  Corriendo.....")
})

//Configurar servidor basico

app.listen(5000, function(){
    console.log("El servidor NODE esta corriendo correctamente")
})