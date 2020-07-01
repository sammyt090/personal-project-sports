import React, { useEffect } from 'react';
import './App.css';
import routes from './routes'

import {withRouter} from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import {connect} from 'react-redux'
import axios from 'axios'
function App(props) {
  useEffect(() => {
    axios.get('/auth/getUser')
    .then(res => {
      // props.updateUser(res.data)
    })
    .catch(err => console.log(err))
  }, [])
  console.log(props)
  return (
    
    <div className="App">
      {props.location.pathname !=='/' && props.location.pathname !=='/register' && <Nav/>}
    {routes}
    </div>
    
  );
}

const mapStateToProps = redux => redux

export default withRouter(connect(mapStateToProps, null)(App));
