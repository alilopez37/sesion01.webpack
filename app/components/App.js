import React from 'react'
import Login from './Login'
import SignUp from './SignUp'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Root from '../pages/Root'
import CRUD from '../pages/CRUDRol'

class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={CRUD}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/main' component={Root}/>
                    <Route exact path='/register' component={SignUp}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;