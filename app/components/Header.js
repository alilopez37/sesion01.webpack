import React from 'react'
import logoBootstrap from '../assets/icons/bootstrap-5-1.svg'

class Header extends React.Component {
    render() {
        return(
            <header>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logoBootstrap} alt="Logo de la aplicación"  className="d-inline-block align-top"/>
                                Estancia
                        </a>
                    </div>
                </nav>
            </header>
        )
    }
};

export default Header;