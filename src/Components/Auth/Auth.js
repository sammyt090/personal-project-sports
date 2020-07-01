import React, { Component } from 'react'
import './Authen.css'
import axios from 'axios'
import {getUser} from '../../redux/reducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import img from '../PersonalProjectSports/logo.png'

class Auth extends Component{
    constructor(){
        super()


        this.state={
            username:'',
            password:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginUser = this.loginUser.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    loginUser() {
        const {username, password} = this.state
        axios.post('/auth/login', {username, password})
        .then(res => {
            this.props.history.push('/dashboard')
            this.setState({
                username: '',
                password: ''
            })
            const {username, first_name, last_name, profile_pic, id} = res.data
            this.props.getUser(
                username,
                first_name,
                last_name,
                profile_pic,
                id
            )
           
        })
        .catch(err => alert(err.response.request.response))
    }

    render(){
        return(
            <div>
            <div className = 'auth-main'>
                <div className= 'header-box'>
                    <img src= {img} alt='logo' className = 'img1'/>
                   
                </div>
                <div className = 'auth-box1'>
                    <h1>Sign In:</h1>
                <div>
                    <p>Username:</p>
                <input className= 'auth-box' value={this.state.username} name="username" placeholder="" onChange = {(event)=> this.handleChange(event)}/>
                </div>
                <div>
                    <p>Password:</p>
                <input className= 'auth-box' value={this.state.password} name="password" placeholder="" onChange = {(event)=> this.handleChange(event)}/>
                </div>

                <button onClick = {this.loginUser} className = 'login-box'>Login</button>
                <div>
                <p>Don't have an account?...</p>
                <Link to = '/register' className = 'link'>Register here!</Link>
                </div>
                </div>
                </div>
                <div className = 'footer'>
                    <h2>SportsConnect</h2>
                </div>
            </div>
        )
    }
}




export default connect(null, {getUser})(Auth)