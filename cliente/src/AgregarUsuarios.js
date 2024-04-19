import React, {useState} from 'react'
import uniqid from 'uniqid'
import axios from 'axios'

function AgregarUsuarios(){

    //Hooks
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')


    function agregarUsuario(){
        var usuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            udusuario: uniqid()
        }
        console.log(usuario)

        axios.post('/api/usuario/agregarusuario', usuario)
        .then(res => {
            alert(res.data)
        })
        .then(err => {console.log(err)})

    }

    return(
        <div>
        <div className="container">
            <div className="row">
                    <h2 className="mt-4">Usuario individual</h2>
            </div>

            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Telefono</label>
                        <input type="text" className="form-control" value={telefono} onChange={(e) => {setTelefono(e.target.value)}}></input>
                    </div>

                    <button onClick={agregarUsuario} className="btn btn-success">Guardar Usuario</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AgregarUsuarios