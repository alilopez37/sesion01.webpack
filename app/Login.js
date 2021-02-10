import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "./utils/APIInvoker";

class Login extends React.Component{

    constructor() {
        super();
        this.state = {
            username:'',
            password:''
        }
    }

    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    usernameValidate(e){
        let username = this.state.username
        APIInvoker.invokeGET(`/users/usernameValidate/${username}`,
            data => {
                //Primera forma de obtener la referencia de un control en el DOM
                //let label = document.getElementById('usernameMessage')
                this.label.innerHTML = data.message
            },
            error => {
                //let label = document.getElementById('usernameMessage')
                this.label.innerHTML = error.message
            })
    }

    render() {
        return(
                <div>
                    <h1>Prácticas profesionales</h1>
                    <form >
                        <label htmlFor="username" >Nombre de usuario</label>
                        <input type="text"
                               name="username"
                               id="username"
                               placeholder="alilopez"
                               value={this.state.username}
                               onChange={this.changeField.bind(this)}
                               onBlur={this.usernameValidate.bind(this)}/>

                               <div ref={ self => this.label = self}></div>

                            <label htmlFor="password">Contraseña</label>
                            <input type="password"
                                   name="password"
                                   id="password"
                                   placeholder="1234"
                                   value={this.state.password}
                                   onChange={this.changeField.bind(this)}/>
                            <div ref={ self => this.pass = self}> </div>
                            <button type="button" >Iniciar sesión</button>
                    </form>
                </div>
        )
    }


}

export default Login;