const express = require('express')
const app = express()

//Importar conexion a MongoDB
const archivoDB = require('./conexion')

//Importación archivo de rutas y modelo usuario
const rutausuario = require('./rutas/usuario')

//Importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use('/api/usuario', rutausuario)

app.get('/', (req, res) => {
    res.end("Bienvenidos al servidor Backend Node.js.  Corriendo.....")
})

//Configurar servidor basico

app.listen(5000, function(){
    console.log("El servidor NODE esta corriendo correctamente")
})