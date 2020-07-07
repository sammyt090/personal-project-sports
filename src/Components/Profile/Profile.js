import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import './Profile.css'
import { editProfile } from '../../redux/reducer'
import axios from 'axios'



function Profile (props){
    const [newProfile, setNewProfile] = useState(props.profile_pic)
    const [favorites, setFavorites] = useState('')
    const [isToggled, setIsToggled] = useState(false)

    

    useEffect(()=> {
        setIsToggled(false)
    })
    const toggleFn = () => ( setIsToggled(!isToggled) )
    const handleChange = event =>setNewProfile(event.target.value) 

    const handleClick = () =>{
        const body = {newProfile}
        axios.put(`/profile/picture/${props.id}`, body).then(res => {
            
        })
        props.editProfile(newProfile)
        }
    // const handleChange = event => 
    return(
        <div className = 'main-profile'>
            <div className = 'profile-info'>
            <img  src={props.profile_pic} alt="profile" className = 'profile-img'/>
            
            <div className = 'text-profile'>
                <div>
    <h3>Name:</h3><p>{props.first_name} {props.last_name}</p>
    </div>
    <div>
    <h3>Username:</h3><p>{props.username}</p>
    </div>
    </div>
    <button className = 'edit-profile-button' onClick = {toggleFn} >Edit Profile</button>
            </div>

    {/* {isToggled ? ( */}
       <p>New Profile Picture:</p> <input value ={newProfile} className='newPicture' name = "New Profile" onChange ={(event) => handleChange(event)}/>
            {/* ):null} */}
            <button onClick ={handleClick}>Save</button>
        </div>
    )
}




const mapStateToProps = redux => redux
const mapDispatchToProps = {editProfile}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)