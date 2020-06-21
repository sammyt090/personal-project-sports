import React from 'react';

import './App.css';
import routes from './routes'

import {withRouter} from 'react-router-dom'
import Nav from './Components/Nav/Nav'

function App(props) {
  return (
    
    <div className="App">
      {props.location.pathname !=='/' && props.location.pathname !=='/register' && <Nav/>}
    {routes}
    </div>
    
  );
}

export default withRouter(App);
