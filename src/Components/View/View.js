import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import './View.css'

class View extends Component {
  constructor() {
    super();

    this.state = {
      isToggled: false,

    };

    this.deletePost = this.deletePost.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.editPost = this.editPost.bind(this);
    this.goingFn = this.goingFn.bind(this);
    this.addPeople = this.addPeople.bind(this);
  }

  componentDidMount() {
    if (this.props.location.pathname.includes("/view")) {
      axios.get(`/dashboard/post/${this.props.match.params.id}`).then((res) => {
        //    console.log(res.data)
        const {
          first_name,
          sport,
          profile_pic,
          people,
          // going,
          details,
          location,
          id,
          date,
          hour,
          postphoto,
          id_posts,
          attendees
        } = res.data[0];
        console.log(this.props.id);
        
        let going = attendees.map(e => e.user_activity_id).includes(this.props.id)

        console.log(going)
        this.setState({
          profile_pic: profile_pic,
          first_name: first_name,
          sport: sport,
          people: people,
          going: going,
          id: id,
          date: date,
          hour: hour,
          postphoto: postphoto,
          details: details,
          location: location,
          id_posts: id_posts,
          isToggled: false,
          attendees: attendees
        });
      });
    }
    console.log(this.state.going)
    // console.log(attendees)
  }

  

  // componentDidUpdate(previousProp, previousState) {
  //   if (previousState.going !== this.state.going) {
  //     this.addPeople(this.state.id_posts);
  //   }
  // }

  toggleFn = () => this.setState({ isToggled: !this.state.isToggled });

  notGoingFn= async ()=> {
  const {id_posts, going } = this.state;
  const {id}= this.props
    console.log(id_posts, this.props.id);
    const body = {id}
    
  axios.put(`/dashboard/remove/${id_posts}`, body).then(res =>{
   const newAttendees = this.state.attendees.filter(e=> e != this.props.id)
   this.setState({ going: false,
                  attendees: newAttendees });
  })
  
  // this.deletePeople(id_posts, !going)}
  }

  goingFn = async () => {
    const {going, id_posts } = this.state;
    this.setState({ going: true });
    this.addPeople(id_posts, true)
    
  };
  addPeople(postId, going) {
    // console.log(this.state)
    const { id_posts } = this.state;
    const {id} =this.props
    
    axios
      .put(`/dashboard/people/${postId}`, { id_posts, id, going })
      .then(() => {
        // this.props.history.push("/dashboard");
        console.log('Finished!');
        console.log(going);
        
        this.componentDidMount()
      });
  }

  deletePost (id_posts) {
    axios.delete(`/dashboard/post/${id_posts}`).then((res) => {
      this.props.history.push("/dashboard");
    });
  }

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  editPost(id_posts) {
    const { sport, location, details, people } = this.state;
    const body = { sport, location, details, people };
    // console.log(id_posts);

    axios.put(`/dashboard/post/${id_posts}`, body).then(() => {
      this.props.history.push("/dashboard");
    });
  }

  render() {
    const {
      first_name,
      sport,
      profile_pic,
      people,
      details,
      location, 
      hour,
      date,
      postphoto,
      id,
      isToggled,
      id_posts,
    } = this.state;

    return (
      <div className="post_box">
        

        {id === this.props.id ? (
          !isToggled ? (
            
            <div className="post_box_main view-view">
            <div className="user-info">
              <img src={profile_pic} className="profile-pic" alt="profile-pic" />
              <h3 className="name-post">{first_name} </h3>
              <div className = 'sport-title'>
                    <h4>Sport: </h4>
                    <p> {sport}</p>
                </div>
            </div>
            <div className="content">
              <div>
                <img src={postphoto} className="post-photo1" />
              </div>
              <div>
             
                <div>
                  {" "}
                  <h4>Date and Time:</h4>{" "}
                  <p>
                    {date}, {hour}
                  </p>
                </div>
    
                
                
                <div>
                  {" "}
                  <h4>Where:</h4> <p>{location}</p>
                </div>
                <div>
                  <h4>People wanted:</h4> <p>{people}</p>
    
                </div>
                <div>
                  <h4> Details:</h4>
                  <p> {details}</p>
                </div>
                </div>

              <button onClick={this.toggleFn} className = 'button111'>Edit</button>
              <button className = 'button111'
                onClick={() => this.deletePost(this.props.match.params.id)}
              >
                Delete
              </button>
            </div>
            </div>
          ) : (
            <div className="background">
            <div className="main-event">
              <div className="inputs">
                <h2>New Event/Activity</h2>
    
                <div className="choice">
                  <p>Sport:</p>
                  <input
                    className="Sport basic"
                    name="sport"
                    value={this.state.sport}
                    onChange={(event) => this.handleChange(event)}
                  ></input>
                </div>
    
                <img src={this.state.postphoto} className="event-photo" />
    
                <div className="choice">
                  <p>Date:</p>
                  <input
                    type="date"
                    className="date basic"
                    name="date"
                    value={this.state.date}
                    onChange={(event) => this.handleChange(event)}
                  ></input>
                  <input
                    type="time"
                    className="hour basic"
                    name="hour"
                    value={this.state.hour}
                    onChange={(event) => this.handleChange(event)}
                  ></input>
                </div>
    
                <div className="choice">
                  <p>Location:</p>
                  <input
                    className="location basic"
                    name="location"
                    value={this.state.location}
                    onChange={(event) => this.handleChange(event)}
                  ></input>
                </div>
    
                <div className="choice">
                  <p>Max People limit:</p>
                  <input
                    className="people basic"
                    name="people"
                    value={this.state.people}
                    onChange={(event) => this.handleChange(event)}
                  ></input>
                </div>
                <div className="choice">
                  <p>Photo:</p>
                  <input
                    className="post-photo basic"
                    name="postPhoto"
                    value={this.state.postphoto}
                    onChange={(event) => this.handleChange(event)}
                  ></input>
                </div>
                <div className="choice">
                  <p>Details:</p>
                  <textarea
                    className="details basic"
                    name="details"
                    value={this.state.details}
                    onChange={(event) => this.handleChange(event)}
                  ></textarea>
                </div>
                <button className="save-change" onClick={() => this.editPost(id_posts)}>Save</button>
                <button className="add-button" onClick={(this.toggleFn, this.componentDidMount)}>
                  Cancel
                </button>
               
              </div>
            </div>
          

              <div>
               
              </div>
            </div>
          )
        ) : (
          
         
        <div className="post_box_main view-view">
        <div className="user-info">
          <img src={profile_pic} className="profile-pic" alt="profile-pic" />
          <h3 className="name-post">{first_name} </h3>
          <div className = 'sport-title'>
                <h4>Sport: </h4>
                <p> {sport}</p>
            </div>
        </div>
        <div className="content">
          <div>
            <img src={postphoto} className="post-photo1" />
          </div>
          <div>
         
            <div>
              {" "}
              <h4>Date and Time:</h4>{" "}
              <p>
                {date}, {hour}
              </p>
            </div>

            
            
            <div>
              {" "}
              <h4>Where:</h4> <p>{location}</p>
            </div>
            <div>
              <h4>People wanted:</h4> <p>{people}</p>

            </div>
            <div>
              <h4> Details:</h4>
              <p> {details}</p>
            </div>
          
            {this.state.going ? (
              <button onClick={this.notGoingFn} className = 'button111' >Actually I can't</button>
            ) : (
              <button onClick={this.goingFn} className = 'button111'>I'm Going!</button>
            )}
          </div>
          </div>
          </div>
        )}
     </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(View);
