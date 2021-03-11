import React from 'react'
import APIInvoker from "../utils/APIInvoker";

class CRUDRol extends React.Component {

    delete(e) {
        let user = {}
        APIInvoker.invokeDELETE('/roles/deleteRol/2',user,data=>{
            alert(data.message)
        }, error => {
            alert(error.message )
        })
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.delete.bind(this)}>Eliminar</button>
            </React.Fragment>
        )
    }
}

export  default CRUDRol;