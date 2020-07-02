import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './Nav.css'
import axios from 'axios'
import {logoutUser} from '../../redux/reducer'
import img from '../PersonalProjectSports/logocolor.png'


function Nav (props){
    // console.log(props)


    function logoutUser(){
        axios.delete('/auth/logout').then(()=>{
            props.logoutUser();
        })
    }
    
    return(
        <div className = 'header-nav'>
            <img src= {img} alt='logo' className = 'img2'/>
            <div className= 'header-links'>
            <h1>Welcome: {`${props.first_name}`}</h1>
            <Link to = '/profile'>
                <h2 className = "nav-links">Profile</h2>
                </Link>
            <Link to = '/dashboard'>
               <h2 className = "nav-links">Home</h2>
                </Link>
            <Link to = '/event'>
                <h2 className = "nav-links">New Post</h2>
                </Link>

            <Link to = '/'>
                <h2 onClick = {logoutUser} className = "nav-links">Logout</h2> 
            </Link>
        </div>  
        </div>

    )
}


const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {logoutUser})(Nav)