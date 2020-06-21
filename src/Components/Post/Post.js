import React from 'react'


function Post (props){
// const {first_name, last_name, profile_pic, sport, details, maxLimit} 
console.log(props)
const {first_name, sport, profile_pic, maxLimit, details, location} = props.e
    return(
        <div>
            <p>{profile_pic}</p>
            <p>{first_name}</p>
            <p>{sport}</p>
            <p>{maxLimit}</p>
            <p>{details}</p>
            <p>{location}</p>
        </div>
    )
}

export default Post