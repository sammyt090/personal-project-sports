import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

class View extends Component{
    constructor(){
        super()

        this.state={
            isToggled: true
        }
        this.deletePost = this.deletePost.bind(this)
    }

    componentDidMount(){
        if (this.props.location.pathname.includes('/view')){
           axios.get(`/dashboard/post/${this.props.match.params.id}`)
           .then(res => {
            //    console.log(res.data)
               const {first_name, sport, profile_pic, people, details, location, id} = res.data[0]
               this.setState({
                   profile_pic: profile_pic,
                   first_name: first_name,
                    sport: sport,
                    people: people,
                    details: details,
                    location: location,
                    id: id
               })
           })
        }
    }

    deletePost(id_posts){
        axios.delete(`/dashboard/post/${id_posts}`).then((res)=> {
            this.props.history.push('/dashboard')
        
        })
    }

    render(){
        const {first_name, sport, profile_pic, people, details, location, id} = this.state
        
        return(
            <div className = 'post_box'>
            <img src ={profile_pic} className='profile-pic' alt="profile-pic"/>
             <p>{first_name}</p>
            <p>{sport}</p>
            <p>{people}</p>
            <p>{details}</p>
            <p>{location}</p>
            
            {id === this.props.id ? 
            <div>
            <button>Edit</button>
            <button onClick= {()=> this.deletePost(this.props.match.params.id)}>Delete</button> 
            </div>
            :
            <button>I'm Going!</button>}
        </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(View)