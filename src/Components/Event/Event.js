import React, { Component } from 'react'
import {connect} from 'react-redux'
import DatePicker from 'react-date-picker';
import axios from 'axios';
// import Dropdown from 'react-bootstrap/Dropdown'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {getUser} from '../../redux/reducer'




class Event extends Component{
    constructor(){
        super()

        this.state={
            sport:'',
            location:'',
            details:'',
            people: null,
            people_coming: 0,
            post_id: null,
            date: new Date()
        }

        this.createPost= this.createPost.bind(this)
    }

    componentDidMount (){
        this.setState({
            post_id: this.props.id
        })
    }

    onChange = date => this.setState({ date })

    handleChange= event => this.setState({[event.target.name]:event.target.value})


    createPost(){
        const{sport, location, details, people, people_coming, post_id} = this.state
        const body = {sport, location, details, people, people_coming, post_id}
        axios.post('/event/posts', body).then((res)=>{
            this.props.history.push('dashboard')
            this.setState({
            sport:'',
            location:'',
            details:'',
            people: '',
            people_coming: 0,
            post_id: null,
            date: new Date()
            })
        })
    }

render(){
    // console.log(DatePicker)
    return(
        <div>Event
            <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
            <div>
                <p>Sport:</p>
                <input className= 'Sport' name='sport' value={this.state.sport} onChange={(event)=> this.handleChange(event)}></input>
            </div>
            {/* <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}
            <div>
                <p>Location:</p>
                <input className= 'location' name='location' value={this.state.location} onChange={(event)=> this.handleChange(event)}></input>
            </div>
            <div>
                <p>Details:</p>
                <input className= 'details' name='details' value={this.state.details} onChange={(event)=> this.handleChange(event)}></input>
            </div>
            <div>
                <p>Max People limit:</p>
                <input className= 'people' name='people' value={this.state.people} onChange={(event)=> this.handleChange(event)}></input>
            </div>

            <button onClick={this.createPost}>Add Post</button>
            
        </div>

    )
}
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Event)