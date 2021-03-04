import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'

class Home extends React.Component {

    render() {
        return (
            <>
                <Header />
                <h1>Bienvenido a la página inicial</h1>
                <Link to='/login'>
                    <h4>Login</h4>
                </Link>
            </>
        )
    }
}

export default Home;