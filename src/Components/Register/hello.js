import React, { Component } from 'react'
import axios from 'axios'
import './Register.css'
import {connect} from 'react-redux'
import {getUser} from '../../redux/reducer'
import {Link} from 'react-router-dom'
import img from '../PersonalProjectSports/logocolor.png'

class Register extends Component{
    constructor(){
        super()


        this.state={
            first_name:'',
            last_name: '',
            username:'',
            password:'',
            profile_pic: 'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg'
        }
        this.handleChange = this.handleChange.bind(this)
        this.registerUser = this.registerUser.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    registerUser(){
        const {first_name, last_name, username, password, profile_pic} = this.state
        
        axios.post('/auth/register', {first_name, last_name, username, password, profile_pic})
        .then((res) => {
            this.props.history.push("/dashboard")
            this.setState({
                first_name:'',
                last_name: '',
                username:'',
                password:''
            })
            const {username, first_name, last_name, profile_pic, id} = res.data
            this.props.getUser(
                username,
                first_name,
                last_name,
                profile_pic,
                id
            )
           
        }).catch((err)=> alert(err.response.request.response))
    }

    render(){
        const {first_name, last_name, username, password} = this.state
        return(
            <div className= 'main1'>
                <div className= 'header-box1'>
                    <img src= {img} alt='logo' className = 'img11'/>
                   
                </div>
                <div className = "box1">
                    <h1>Get Started!</h1>
                <div className = "register">
                    <p>First Name</p>
                <input className= 'boxes' name="first_name" placeholder="" value={first_name} onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className = "register">
                    <p>Last Name</p>
                <input className= 'boxes' name="last_name" placeholder="" value={last_name} onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className = "register">
                    <p>Username</p>
                <input className= 'boxes' name="username" placeholder="" value={username} onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className = "register">
                    <p>Password</p>
                <input className= 'boxes' name="password" placeholder="" value={password} onChange={(event) => this.handleChange(event)}/>
                </div>

                <button onClick={this.registerUser}>Register</button>
                <Link to = '/' className = 'link1'><p>Cancel</p></Link>
                </div>

            </div>
        )
    }
}



export default connect(null, {getUser})(Register)