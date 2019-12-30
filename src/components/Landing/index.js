import React from 'react';
import Fade from 'react-reveal/Fade';

import './style.css';

export default function index() {
  return (
    <div className='landing'>
      <Fade up>
        <div className='landing-box'>
          <h2>Carrie-Ann Elizabeth</h2>
          <h3>Professional singer</h3>
          <p>
            <span>Click on the player below to listen</span>
            <br />
            <i>(can remain playing as you browse)</i>
          </p>
        </div>
      </Fade>
      <br />
      <i class='fas fa-arrow-down icon'></i>
    </div>
  );
}
