import React from 'react'

class Root extends React.Component {

    constructor(props) {
        super(props);
        this.rol = window.localStorage.getItem('idRol')
    }

    render(){
        return(
            <>
                <If condition={this.rol === 1}>
                    <Link to={'/eliminarElemento'}>Eliminar</Link>
                </If>
                <If condition={this.rol === 2}>
                    Mostrar la opción de comprar
                </If>
                <h1>Bienvenido a la página principal del sistema</h1>
            </>
        )
    }
}

export default Root;