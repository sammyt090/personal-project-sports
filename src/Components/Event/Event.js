import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import DatePicker from "react-date-picker";
import axios from "axios";
import "./Event.css";
// import Time from '../Time/Time'
// import {getUser} from '../../redux/reducer'

function Event (props) {
  
    
     const [sport, setSport] = useState("")
     const [location, setLocation] = useState("")
     const [details, setDetails] = useState("")
     const [people, setPeople] = useState(null)
     const [posts_id, setPosts_id] = useState(null)
     const [user_activity_id, setUser_activity_id] = useState(null)
     const [date, setDate] = useState("0000-00-00")
     const [postPhoto, setPostPhoto] = useState('https://www.sportswearable.net/wp-content/uploads/2019/03/sports-New-Brunswick.jpg')
     const [hour, setHour] = useState("00:00:00")
    

    // this.onChange= this.onChange.bind(this)
    // this.selectTime=this.selectTime.bind(this)
  

  useEffect(()=> {
    // console.log(this.props);
    // console.log(this.state);
    setPosts_id(props.id)
    setUser_activity_id(props.id) 
    
  })
  // onChange(date){
  //     this.setState({
  //         date
  //     })
  //     console.log(date)
  // }
//   onChange = (date) => this.setState({ date });

const handleChanges = event =>setSport(event.target.value) 
const handleChanged = event =>setDate(event.target.value) 
const handleChanget = event =>setHour(event.target.value) 
const handleChangel = event =>setLocation(event.target.value) 
const handleChangef = event =>setPostPhoto(event.target.value) 
const handleChangede = event =>setDetails(event.target.value) 
const handleChangep = event =>setPeople(event.target.value) 

  

  const createPost = () => {
    
    const body = {
      sport,
      location,
      details,
      people,
      date,
      hour,
      postPhoto,
      posts_id,
      
    };
    axios.post("/event/posts", body).then((res) => {
      props.history.push("dashboard");
      
    });
  }

  
    return (
      <div className="background">
        <div className="main-event">
          <div className="inputs">
            <h2>New Event/Activity</h2>

            <div className="choice">
              <p>Sport:</p>
              <input
                className="Sport basic"
                name="sport"
                value={sport}
                onChange={(event) => handleChanges(event)}
              ></input>
            </div>

            <img src={postPhoto} className="event-photo" />

            <div className="choice">
              <p>Date:</p>
              <input
                type="date"
                className="date basic"
                name="date"
                value={date}
                onChange={(event) => handleChanged(event)}
              ></input>
              <input
                type="time"
                className="hour basic"
                name="hour"
                value={hour}
                onChange={(event) => handleChanget(event)}
              ></input>
            </div>

            <div className="choice">
              <p>Location:</p>
              <input
                className="location basic"
                name="location"
                value={location}
                onChange={(event) => handleChangel(event)}
              ></input>
            </div>

            <div className="choice">
              <p>Max People limit:</p>
              <input
                className="people basic"
                name="people"
                value={people}
                onChange={(event) => handleChangep(event)}
              ></input>
            </div>
            <div className="choice">
              <p>Photo:</p>
              <input
                className="post-photo basic"
                name="postPhoto"
                value={postPhoto}
                onChange={(event) => handleChangef(event)}
              ></input>
            </div>
            <div className="choice">
              <p>Details:</p>
              <textarea
                className="details basic"
                name="details"
                value={details}
                onChange={(event) => handleChangede(event)}
              ></textarea>
            </div>

            <button onClick={createPost} className="add-button">
              Add Post
            </button>
          </div>
        </div>
      </div>
    );
  }


const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps)(Event);