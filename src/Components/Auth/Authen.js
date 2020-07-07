import React, { useState } from 'react'
import './Authen.css'
import axios from 'axios'
import {getUser} from '../../redux/reducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import img from '../PersonalProjectSports/logocolor.png'

function Authen (props){
 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


      
       
    

    const handleChange = event =>setUsername(event.target.value) 
    const handleChange1 = event =>setPassword(event.target.value)


    const loginUser = () => {
        
        axios.post('/auth/login', {username, password})
        .then(res => {
            props.history.push('/dashboard')
            setPassword('')
            const {username, first_name, last_name, profile_pic, id} = res.data
            props.getUser(
                username,
                first_name,
                last_name,
                profile_pic,
                id
            )
           
        })
        .catch(err => alert(err.response.request.response))
    }

    
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
                <input className= 'auth-box' value={username} name="username" placeholder="" onChange = {(event)=> handleChange(event)}/>
                </div>
                <div>
                    <p>Password:</p>
                <input className= 'auth-box' value={password} name="password" placeholder="" onChange = {(event)=> handleChange1(event)}/>
                </div>

                <button onClick = {loginUser} className = 'login-box'>Login</button>
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





export default connect(null, {getUser})(Authen)