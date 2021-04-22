import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import CardEmpresa from "../components/CardEmpresa"

class CardEmpresas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listaEmpresas: []
        }
    }
    componentDidMount() {

        APIInvoker.invokeGET('/empresas/allEmpresas',data => {
            this.setState({
                listaEmpresas : data.data
            })
        }, error =>{
            console.log('error')
        })
    }

    render() {
        return(
            <div className="container border border-3 border-success">
                <For each="empresa" of={this.state.listaEmpresas}>
                    <CardEmpresa dato={empresa}/>
                </For>
            </div>
        )
    }
}

export  default CardEmpresas;