import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './Nav.css'
import axios from 'axios'
import {logoutUser} from '../../redux/reducer'


function Nav (props){
    // console.log(props)


    function logoutUser(){
        axios.delete('/auth/logout').then(()=>{
            props.logoutUser();
        })
    }
    
    return(
        <div className = 'header'>
            <h1>Welcome: {`${props.first_name}`}</h1>
            <Link to = '/Profile'>
                <button>Profile</button>
                </Link>
            <Link to = '/dashboard'>
                <button>Dashboard</button>
                </Link>
            <Link to = '/Event'>
                <button>New Post</button>
                </Link>

            <Link to = '/'>
                <button onClick = {logoutUser}>Logout</button>
            </Link>
        </div>  

    )
}


const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {logoutUser})(Nav)