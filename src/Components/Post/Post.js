import React from 'react'
import './Post.css'
import {Link} from 'react-router-dom'

function Post (props){
// const {first_name, last_name, profile_pic, sport, details, maxLimit} 
// console.log(props)
const {first_name, sport, profile_pic, people, details, location, id_posts} = props.e
    return(
        <div className = 'post_box'>
            <img src ={profile_pic} className='profile-pic' alt="profile-pic"/>
            <p>{first_name}</p>
           <Link to = {`/view/${id_posts}`}>
            <p>{sport}</p>
             </Link>
            <p>{people}</p>
            <p>{details}</p>
            <p>{location}</p>
        </div>
    )
}

export default Post