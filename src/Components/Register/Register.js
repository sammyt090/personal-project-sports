import React, { useState } from 'react'
import axios from 'axios'
import './Register.css'
import {connect} from 'react-redux'
import {getUser} from '../../redux/reducer'
import {Link} from 'react-router-dom'
import img from '../PersonalProjectSports/logocolor.png'

function Register (props){
    
    const [last_name, setLast_name] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [profile_pic, setProfile_pic] = useState('https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg')
       


    const handleChange = event =>setLast_name(event.target.value) 
    const handleChange1 = event =>setFirst_name(event.target.value)
    const handleChange2 = event =>setUsername(event.target.value) 
    const handleChange3 = event =>setPassword(event.target.value)

   


    const registerUser = () => {
        
        
        axios.post('/auth/register', {first_name, last_name, username, password, profile_pic})
        .then((res) => {
            props.history.push("/dashboard")
           
            const {username, first_name, last_name, profile_pic, id} = res.data
            props.getUser(
                username,
                first_name,
                last_name,
                profile_pic,
                id
            )
           
        }).catch((err)=> alert(err.response.request.response))
    }

    
       
        return(
            <div className= 'main1'>
                <div className= 'header-box1'>
                    <img src= {img} alt='logo' className = 'img11'/>
                   
                </div>
                <div className = "box1">
                    <h1>Get Started!</h1>
                <div className = "register">
                    <p>First Name</p>
                <input className= 'boxes' name="first_name" placeholder="" value={first_name} onChange={(event) => handleChange1(event)}/>
                </div>
                <div className = "register">
                    <p>Last Name</p>
                <input className= 'boxes' name="last_name" placeholder="" value={last_name} onChange={(event) => handleChange(event)}/>
                </div>
                <div className = "register">
                    <p>Username</p>
                <input className= 'boxes' name="username" placeholder="" value={username} onChange={(event) => handleChange2(event)}/>
                </div>
                <div className = "register">
                    <p>Password</p>
                <input className= 'boxes' name="password" placeholder="" value={password} onChange={(event) => handleChange3(event)}/>
                </div>

                <button onClick={registerUser}>Register</button>
                <Link to = '/' className = 'link1'><p>Cancel</p></Link>
                </div>

            </div>
        )
    }



export default connect(null, {getUser})(Register)