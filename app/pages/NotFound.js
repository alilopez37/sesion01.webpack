import React from 'react'
import {Link} from 'react-router-dom'

class NotFound extends React.Component {
    render(){
        return (
            <>
                <h1>Página no encontrada</h1>
                <Link to='/'>
                    <h2>Página principal</h2>
                </Link>
            </>
        )
    }
}

export default NotFound;