import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Register from './Components/Register/Register'
import Dashboard from './Components/Dashboard/Dashboard'
import Profile from './Components/Profile/Profile'
import Event from './Components/Event/Event'


export default (
    <Switch>
        <Route exact path ='/' component = {Auth}/>
        <Route path = '/register' component = {Register}/>
        <Route path = '/dashboard' component = {Dashboard}/>
        <Route path = '/profile' component = {Profile}/>
        <Route path = '/event' component = {Event}/>
    </Switch>
)