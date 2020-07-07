import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Authen from './Components/Auth/Authen'
import Register from './Components/Register/Register'
import Dashboard from './Components/Dashboard/Dashboard'
import Profile from './Components/Profile/Profile'
import Event from './Components/Event/Event'
import View from './Components/View/View'


export default (
    <Switch>
        <Route exact path ='/' component = {Authen}/>
        <Route path = '/register' component = {Register}/>
        <Route path = '/dashboard' component = {Dashboard}/>
        <Route path = '/profile' component = {Profile}/>
        <Route path = '/event' component = {Event}/>
        <Route path = '/view/:id' component = {View}/>
    </Switch>
)