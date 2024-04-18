const express = requiere('express')
const router = express.Router()

const mongoose = requiere('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String 
})

const ModeloUsuario = mongoose.model('usuario', eschemausuario)
module.exports

router.get('/ejemplo', (req, res) =>{
    res.end("Saludos carga desde ruta ejemplo")
})