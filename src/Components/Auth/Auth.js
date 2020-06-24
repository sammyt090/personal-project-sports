import React, { Component } from 'react'
import './Auth.css'
import axios from 'axios'
import {getUser} from '../../redux/reducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


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
            <div className = 'auth-main'>
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

                <button onClick = {this.loginUser}>Login</button>
                <div>
                <p>Don't have an account?...</p>
                <Link to = '/register'>Register here!</Link>
                </div>
                </div>
                
            </div>
        )
    }
}




export default connect(null, {getUser})(Auth)