import React from 'react';
import {Link} from 'react-router';

export default class Main extends React.Component{
  render(){
    return (
      <div> 
        <h1>
        <Link to="/">
          Reduxdagram
          </Link>
        </h1>
      </div>
    );
  }
}