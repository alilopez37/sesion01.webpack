import React from 'react'
import APIInvoker from "../utils/APIInvoker";

class CRUDRol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            name: null,
            path: null
        }
    }

    subirarchivo(e) {
        const archivos = e.target.files;
        const data = new FormData();

        data.append('archivo', archivos[0]);
        data.append('nombre','Pedro')
        data.append('apellidoPaterno','López')

        APIInvoker.invokePOSTimg('/users/file',data, data =>{
            this.setState({
                status: true,
                name: data.path,
                path: data.path
            })
        }, error =>{
            document.getElementById('resultado').innerHTML = data
        })

    }

    render() {
        return (
            <React.Fragment>
                <img scr={'http://localhost:3000/uploads/2.jpg'}/>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Subir archivos</label>
                    <input className="form-control" type="file" id="formFile" name="prueba"
                           onChange={this.subirarchivo.bind(this)}/>
                </div>
                <div id="resultado"></div>
                <If condition={this.state.status === true}>
                    <p>
                        <h1>{this.state.name}</h1>
                        <img src={'http://localhost:3000'+this.state.path}/>
                    </p>
                </If>
            </React.Fragment>
        )
    }
}

export  default CRUDRol;