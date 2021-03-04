import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'

class SignUp extends React.Component {

    constructor() {
        super()
        this.state  = {
            idRol : '1',
            nombre : '',
            apellidoPaterno : '',
            username : '',
            password : ''
        }
        this.status = false
        this.usernameOk = false
    }

    changeField(e) {
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state,{
            [field] : {$set : value}
        }))
    }

    validateUsername(e) {
        let username = this.state.username
        if (username) {
            APIInvoker.invokeGET(`/users/usernameValidate/${username}`,data => {
                this.username.innerHTML = '* El nombre de usuario no está disponible'
                this.usernameOk = false
            }, error => {
                this.username.innerHTML = '* El nombre de usuario está disponible'
                this.usernameOk =  true
            })
        } else
            this.usernameOk = false
    }

    crearCuenta(e){
        this.messageError.innerHTML = ''
        this.validarCampos()
        if (this.status && this.usernameOk) {
            let user = {
                idRol: this.state.idRol,
                nombre: this.state.nombre,
                apellidoPaterno: this.state.apellidoPaterno,
                username: this.state.username,
                password: this.state.password
            }

            APIInvoker.invokePOST('/users/signup',user,data=>{
                alert(data.message)
                this.usernameOk = false
            }, error => {
                alert(error.message + error.error)
            })
        } else
            this.messageError.innerHTML = 'Los campos marcados con * son obligatorios'
        e.preventDefault()
    }

    validarCampos(){
        let estado = true;

        if (this.state.idRol.length === 0) {
            this.idrRol.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.idrRol.innerHTML = ''

        if (this.state.nombre.length === 0) {
            this.nombre.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.nombre.innerHTML = ''

        if (this.state.apellidoPaterno.length === 0) {
            this.apellidoPaterno.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.apellidoPaterno.innerHTML = ''

        if (this.state.username.length === 0) {
            this.username.innerHTML = '* Campo obligatorio'
            estado = false;
        }

        if (this.state.password.length === 0) {
            this.password.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.password.innerHTML = ''

        if (estado === false)
            this.status = false
        else
            this.status = true
    }

    render(){
        return (
            <div>
                <h1>Registro de usuarios</h1>
                <form onSubmit={this.crearCuenta.bind(this)}>
                    <div>
                        <label htmlFor='idRol'>Tipo de usuario</label>
                        <select name="idRol" id="idRol" value={this.state.idRol} onChange={this.changeField.bind(this)}>
                            <option value="1">Alumno</option>
                            <option value="2">Director</option>
                            <option value="3">Asesor Académico</option>
                        </select>
                        <label ref={self=> this.idrRol = self}></label>
                    </div>
                    <div>
                        <label htmlFor='nombre'>Nombre</label>
                        <input type='text'
                               id='nombre'
                               name='nombre'
                               placeholder='Alí Santiago'
                               value={this.state.nombre}
                               onChange={this.changeField.bind(this)}/>
                        <label ref={self=> this.nombre = self}></label>
                    </div>
                    <div>
                        <label htmlFor='apellidoPaterno'>Apellido paterno</label>
                        <input  type='text'
                                id='apellidoPaterno'
                                name='apellidoPaterno'
                                placeholder='López'
                                value={this.state.apellidoPaterno}
                                onChange={this.changeField.bind(this)}/>
                        <label ref={self=> this.apellidoPaterno = self}></label>
                    </div>
                    <div>
                        <label htmlFor='username'>Nombre de usuario</label>
                        <input  type='text'
                                id='username'
                                name='username'
                                placeholder='alilopez'
                                value={this.state.username}
                                ref={self => this.inputUsername = self}
                                onChange={this.changeField.bind(this)}
                                onBlur={this.validateUsername.bind(this)}/>
                        <label ref={self=> this.username = self}></label>
                    </div>
                    <div>
                        <label htmlFor='password'>Contraseña</label>
                        <input  type='password'
                                id='password'
                                name='password'
                                placeholder='LgfclR3c0rd4r'
                                value={this.state.password}
                                onChange={this.changeField.bind(this)}/>
                        <label ref={self=> this.password = self}></label>
                    </div>

                    <button
                        onClick={this.crearCuenta.bind(this)}>
                        Crear cuenta
                    </button>
                    <div ref={self => this.messageError = self}></div>
                </form>
            </div>
        )
    }
}

export default SignUp;