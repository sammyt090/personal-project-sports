import React, { Component } from 'react'
import axios from 'axios'
import Post from '../Post/Post'
import './Dashboard.css'



class Dashboard extends Component{
    constructor(){
        super()

        this.state={
            posts: [],
            
        }
        // this.componentDidMount = this.componentDidMount.bind(this)
        this.getPosts = this.getPosts.bind(this)

    }

    componentDidMount(){
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(getPosition);
        //   }
        //   function getPosition(position) {
        //     console.log(position.coords.latitude, position.coords.longitude);
        //   }
        //   navigator.geolocation.getCurrentPosition(function(position) {
        //     console.log("Latitude is :", position.coords.latitude);
        //     console.log("Longitude is :", position.coords.longitude);
        //   });
        //   navigator.geolocation.getCurrentPosition(function(position) {
        //     console.log(position)
        //   });
        //   navigator.geolocation.getCurrentPosition(
        //     function(position) {
        //       console.log(position);
        //     },
        //     function(error) {
        //       console.error("Error Code = " + error.code + " - " + error.message);
        //     }
        //   );
        
        this.getPosts()
    }

    getPosts(){
        axios.get('/dashboard/posts').then((res) => {
            // console.log(res)
            this.setState({
                posts: res.data
            })
        })
    }


render(){
    let mapPosts = this.state.posts.map(e =>  <div  key={e.id_posts}> <Post e= {e} posts ={this.state.posts}/></div>)

    return(
        <div className = 'dashboard'>
      <div className = 'post_box_content'>
       {mapPosts}
       </div>
        </div>
    )
}
}

export default Dashboard