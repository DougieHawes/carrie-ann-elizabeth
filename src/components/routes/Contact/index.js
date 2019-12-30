import React from 'react';
import Fade from 'react-reveal/Fade';

import './style.css';

const index = () => {
  return (
    <Fade>
      <div className='contact'>
        <h2>CONTACT</h2>
        <h3>Phone</h3>
        <i className='fas fa-phone'></i>
        <a href='tel:07950104938'>call me</a>
        <h3>Email</h3>
        <i className='fas fa-envelope-open'></i>
        <a href='mailto:caz_a22@hotmail.co.uk'>My email</a>
        <h3>Facebook</h3>
        <i className='fab fa-facebook-f'></i>
        <a href='https://www.facebook.com/pages/category/Community/Carrie-Ann-Elizabeth-727232540677459/'>
          My Facebook Page
        </a>
        <h3>Twitter</h3>
        <i className='fab fa-twitter'></i>
        <a href='https://twitter.com/CarrieAnnClarke' target='blank'>
          My Twitter Page
        </a>
      </div>
    </Fade>
  );
};

export default index;
