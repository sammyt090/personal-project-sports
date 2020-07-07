import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

function Post(props) {
  // const {first_name, last_name, profile_pic, sport, details, maxLimit}
  // console.log(props)
  const {
    first_name,
    sport,
    profile_pic,
    people,
    postphoto,
    date,
    hour,
    details,
    location,
    id_posts,
  } = props.e;
  // console.log(props);

  return (
    <Link to={`/view/${id_posts}`}>
      <div className="post_box_main">
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
        </div>
      </div>
    </Link>
  );
}

export default Post;
