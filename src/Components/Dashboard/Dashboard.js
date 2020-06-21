import React, { Component } from 'react'
import axios from 'axios'
import Post from '../Post/Post'
import './Dashboard.css'



class Dashboard extends Component{
    constructor(){
        super()

        this.state={
            posts: []
        }
        // this.componentDidMount = this.componentDidMount.bind(this)
        this.getPosts = this.getPosts.bind(this)

    }

    componentDidMount(){
        this.getPosts()
    }

    getPosts(){
        axios.get('/dashboard/posts').then((res) => {
            console.log(res)
            this.setState({
                posts: res.data
            })
        })
    }


render(){
    let mapPosts = this.state.posts.map(e => <div><Post e= {e} posts ={this.state.posts}/></div>)

    return(
        <div className = 'dashboard'>
        <p> Dashboard:</p>
        {mapPosts}
        </div>
    )
}
}

export default Dashboard