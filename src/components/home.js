import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      Home route
      <Link to='/about'>About path</Link>
    </div>
  )
}

export default Home;
