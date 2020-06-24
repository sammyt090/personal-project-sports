import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Profile.css'



class Profile extends Component{
    constructor(){
        super()


        this.state={
            favorites: []
        }
    }



render(){
    return(
        <div>
            <img  src={this.props.profile_pic} alt="profile" className = 'profile-img'/>
    <h3>Name:</h3><p>{this.props.first_name} {this.props.last_name}</p>
    <h3>Username:</h3><p>{this.props.username}</p>
        </div>
    )
}
}

const mapStateToProps = redux => redux
export default connect(mapStateToProps)(Profile)