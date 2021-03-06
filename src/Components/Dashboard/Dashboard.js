import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Post from '../Post/Post'
import './Dashboard.css'



function Dashboard (props){
   
    const [posts, setPosts] = useState([])
        
       
       

    useEffect(() => {
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
        
        getPosts()
    })

    const getPosts = () => {
        axios.get('/dashboard/posts').then((res) => {
            // console.log(res)
            setPosts(res.data)
        })
    }



    let mapPosts = posts.map(e =>  <div  key={e.id_posts}> <Post e= {e} posts ={posts}/></div>)

    return(
        <div className = 'dashboard'>
      <div className = 'post_box_content'>
       {mapPosts}
       </div>
        </div>
    )
}


export default Dashboard