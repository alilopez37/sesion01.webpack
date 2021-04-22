import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'
import {Link} from 'react-router-dom'

class NuevaEmpresa extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: null,
            direccion: null,
            logotipo: null,
        }
    }

    changeField(e) {
        let field = e.target.name
        let value = e.target.value
        let type = e.target.type

        if (type === 'file')
            this.setState(update(this.state,{
                logotipo : {$set : e.target.files[0]}
            }))
        else
            this.setState(update(this.state,{
            [field] : {$set : value}
            }))
    }
    uploads(e){
        e.preventDefault()
        const data = new FormData();

        data.append('nombre',this.state.nombre)
        data.append('direccion',this.state.direccion)
        data.append('logotipo', this.state.logotipo);

        APIInvoker.invokePOSTimg('/empresas/create',data, data =>{
            document.getElementById('resultado').innerHTML = 'Registro creado exitosamente'
        }, error =>{
            document.getElementById('resultado').innerHTML = data
        })
    }

    render() {

        return(
            <form>
                <div className="row mb-3">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name"
                               name="nombre" onChange={this.changeField.bind(this)}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="direccion" className="col-sm-2 col-form-label">Dirección</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="direccion"
                               name="direccion" onChange={this.changeField.bind(this)}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="formFile" className="form-label">Logotipo de la empresa</label>
                    <input className="form-control" type="file" id="formFile"
                           onChange={this.changeField.bind(this)}/>
                </div>
                <div  id="resultado">Prueba</div>
                <div className="row mb-3">
                    <button type="submit" className="btn btn-primary" onClick={this.uploads.bind(this)}>Registrar empresa</button>
                </div>
                <div className="row mb-3">
                    <Link to='/empresasRegistradas'>
                        <h4 className="btn btn-primary">Ver empresas registradas</h4>
                    </Link>
                </div>
            </form>
        )
    }
}

export  default NuevaEmpresa;