import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const index = () => {
  return (
    <div>
      <NavLink to='/'>
        <h1>CARRIE-ANN ELIZABETH</h1>
      </NavLink>
      <div className='nav'>
        <div className='nav-item'>
          <NavLink to='/about'>
            <h2>ABOUT ME</h2>
          </NavLink>
        </div>
        <div className='nav-item'>
          <NavLink to='/shows'>
            <h2>MY SHOWS</h2>
          </NavLink>
        </div>
        <div className='nav-item'>
          <NavLink to='/videos'>
            <h2>MY VIDEOS</h2>
          </NavLink>
        </div>
        <div className='nav-item'>
          <NavLink to='/contact'>
            <h2>CONTACT ME</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default index;
