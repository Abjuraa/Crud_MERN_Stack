const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objectodb = mongoose.connection

objectodb.on('connected', ()=> {console.log('Conexion correcta a MongoDB')})
objectodb.on('error', ()=> {console.log('Error en la conexion a MongoDB')})

module.exports = mongoose