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
        <div className = 'main-profile'>
            <div className = 'profile-info'>
            <img  src={this.props.profile_pic} alt="profile" className = 'profile-img'/>
            <div className = 'text-profile'>
                <div>
    <h3>Name:</h3><p>{this.props.first_name} {this.props.last_name}</p>
    </div>
    <div>
    <h3>Username:</h3><p>{this.props.username}</p>
    </div>
    </div>
    <button className = 'edit-profile-button'>Edit Profile</button>
            </div>
            
        </div>
    )
}
}

const mapStateToProps = redux => redux
export default connect(mapStateToProps)(Profile)