import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class View extends Component {
  constructor() {
    super();

    this.state = {
      isToggled: false,
    };


    this.deletePost = this.deletePost.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.editPost = this.editPost.bind(this);
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
          people_coming,
          details,
          location,
          id,
          id_posts,
        } = res.data[0];
        this.setState({
          profile_pic: profile_pic,
          first_name: first_name,
          sport: sport,
          people: people,
          people_coming: people_coming,
          details: details,
          location: location,
          id: id,
          id_posts: id_posts,
          isToggled: false,
        });
      });
    }
  }

  toggleFn = () => this.setState({ isToggled: !this.state.isToggled });

  deletePost(id_posts) {
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
      first_name, sport, profile_pic, people, details, location, id, isToggled, id_posts} = this.state;

    return (
      <div className="post_box">
        <img src={profile_pic} className="profile-pic" alt="profile-pic" />
        <p>{first_name}</p>

        {id === this.props.id ? (
          !isToggled ? (
            <div>
              <p>{sport}</p>
              <p>{people}</p>
              <p>{details}</p>
              <p>{location}</p>

              <button onClick={this.toggleFn}>Edit</button>
              <button
                onClick={() => this.deletePost(this.props.match.params.id)}
              >
                Delete
              </button>
            </div>
          ) : (
            <div>
              <div>
                <p>Sport:</p>
                <input
                  className="Sport"
                  name="sport"
                  value={this.state.sport}
                  onChange={(event) => this.handleChange(event)}
                ></input>
                <p>Location:</p>
                <input
                  className="location"
                  name="location"
                  value={this.state.location}
                  onChange={(event) => this.handleChange(event)}
                ></input>
              </div>
              <div>
                <p>Details:</p>
                <input
                  className="details"
                  name="details"
                  value={this.state.details}
                  onChange={(event) => this.handleChange(event)}
                ></input>
              </div>
              <div>
                <p>Max People limit:</p>
                <input
                  className="people"
                  name="people"
                  value={this.state.people}
                  onChange={(event) => this.handleChange(event)}
                ></input>
              </div>

              <div>
                <button onClick={()=>this.editPost(id_posts)}>Save</button>
                <button onClick={(this.toggleFn, this.componentDidMount)}>
                  Cancel
                </button>{" "}
              </div>
            </div>
          )
        ) : (
          <div>
            <p>{sport}</p>
            <p>{people}</p>
            <p>{details}</p>
            <p>{location}</p>
            <button>I'm Going!</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(View);
