import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import './Profile.css'
import { editProfile } from '../../redux/reducer'
import axios from 'axios'




function Profile (props){
    const [newProfile, setNewProfile] = useState(props.profile_pic)
    const [newName, setNewName] = useState(props.first_name)
    const [newLast, setNewLast] = useState(props.last_name)
    const [newUsername, setNewUsername] = useState(props.username)
    // const [favorites, setFavorites] = useState('')
    const [isToggled, setIsToggled] = useState(false)


    

    useEffect(()=> {
        setIsToggled(false)
    },[])
    const toggleFn = () => ( setIsToggled(!isToggled) )
    const handleChange = event =>setNewProfile(event.target.value) 

    const handleClick = (e) =>{
        e.preventDefault()
        const body = {newProfile, newName, newLast, newUsername}
        axios.put(`/profile/picture/${props.id}`, body).then(res => {
            
        })
        props.editProfile(body)
        }
    // const handleChange = event => 
    return(
        <div className = 'main-profile'>
            <div className = 'profile-info'>
            <img  src={props.profile_pic} alt="profile" className = 'profile-img'/>
            
            

    {isToggled ? 
    <div>
       <p>New Profile Picture:</p>
       <form onSubmit ={e => handleClick(e)}>
        <input value = {newProfile} 
        className='newPicture' 
        name = "New Profile" 
        onChange ={e => setNewProfile}/>
        <input 
        value = {newName}
        className='newName'
        name = "newName"
        onChange = {e => setNewName}
        />
        <input 
        value = {newLast}
        className='newLast'
        name = "newLast"
        onChange = {e => setNewLast}
        />
        <input
        value = {newUsername}
        className = 'newUsername'
        onChange = {e => setNewUsername}/>
        <button type = 'submit'>Save</button>
        </form>
        </div> 
        :
        <div className = 'text-profile'>
                <div>
    <h3>Name:</h3><p>{props.first_name} {props.last_name}</p>
    </div>
    <div>
    <h3>Username:</h3><p>{props.username}</p>
    </div>
    
    <button className = 'edit-profile-button' onClick = {toggleFn} >Edit Profile</button>
            </div>
            }
           
        </div>
        </div>
    )
}




const mapStateToProps = redux => redux
const mapDispatchToProps = {editProfile}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)