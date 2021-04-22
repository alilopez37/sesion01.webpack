import React from 'react'

class CardEmpresa extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="card" style={{width: "18rem"}}>
                <If condition={this.props.dato.logotipo}>
                    <img src={'http://localhost:3000'+this.props.dato.logotipo} className="card-img-top" />
                </If>
                <If condition={this.props.dato.logotipo === null}>
                    <img src={'http://localhost:3000/uploads/general.png'} className="card-img-top" />
                </If>

                <div className="card-body">
                    <p className="card-text">{this.props.dato.nombre}</p>
                    <p className="card-text">{this.props.dato.direccion}</p>
                </div>
            </div>
        )
    }
}

export  default CardEmpresa;