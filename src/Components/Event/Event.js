import React, { Component } from 'react'
import {connect} from 'react-redux'
import DatePicker from 'react-date-picker';
import axios from 'axios';
import './Event.css'
// import Time from '../Time/Time'
// import {getUser} from '../../redux/reducer'




class Event extends Component{
    constructor(){
        super()

        this.state={
            sport:'',
            location:'',
            details:'',
            people: null,
            posts_id: null,
            user_activity_id:null,
            date: '0000-00-00',
            postPhoto: '',
            time: '',
            hour: '00:00:00',
        }

        this.createPost= this.createPost.bind(this)
        // this.onChange= this.onChange.bind(this)
        // this.selectTime=this.selectTime.bind(this)
    }

    componentDidMount (){
        console.log(this.props);
        console.log(this.state);
        
        
        this.setState({
            posts_id: this.props.id,
            user_activity_id: this.props.id
        })
    }
    // onChange(date){
    //     this.setState({
    //         date
    //     })
    //     console.log(date)
    // }
    onChange = date => this.setState({ date })

    handleChange= event => this.setState({[event.target.name]:event.target.value})


    createPost(){
        const{sport, location, details, people, going, posts_id} = this.state
        const body = {sport, location, details, people, posts_id, going}
        axios.post('/event/posts', body).then((res)=>{
            this.props.history.push('dashboard')
            this.setState({
            sport:'',
            location:'',
            details:'',
            people: '',
            posts_id: null,
            date: new Date(),
            postPhot: ''
            })
        })
    }
   

render(){
  
    return(
        <div className = 'background'>
        <div className = 'main-event'>
            <h2>New Event/Activity</h2>
            <div>Date:
           
        <input type = 'date' className = 'date' name = 'date' value={this.state.date} onChange={(event)=> this.handleChange(event)}></input>
        <input type ='time' className= 'hour' name = 'hour' value={this.state.hour} onChange={(event)=> this.handleChange(event)}></input>
        </div>
        
            <div className = 'choice'>
                <p>Location:</p>
                <input className= 'location' name='location' value={this.state.location} onChange={(event)=> this.handleChange(event)}></input>
            </div>
            <div className = 'choice'>
                <p>Details:</p>
                <input className= 'details' name='details' value={this.state.details} onChange={(event)=> this.handleChange(event)}></input>
            </div>
            <div className = 'choice'>
                <p>Max People limit:</p>
                <input className= 'people' name='people' value={this.state.people} onChange={(event)=> this.handleChange(event)}></input>
            </div>
            <div className = 'choice'>
                <p>Photo</p>
                <input className= 'post-photo' name='postPhoto' value={this.state.postPhoto} onChange={(event)=> this.handleChange(event)}></input>
            </div>
            

            <button onClick={this.createPost}>Add Post</button>
            
        </div>
        </div>

    )
}
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Event)