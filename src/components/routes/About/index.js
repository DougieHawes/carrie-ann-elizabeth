import React from 'react';
import Fade from 'react-reveal/Fade';

import './style.css';

const index = () => {
  return (
    <Fade>
      <div className='about'>
        <h2>ABOUT ME</h2>
        <p>
          I am trained in musical theatre and Dramatherapy. The shows I perform
          are or entertainment purposes, with the added bonus of the therapeutic
          effects of music. Music has been proven to have positive benefits for
          people with conditions like dementia by how it taps into memories of
          times in the past that they still remember fondly, and as clear as
          they have ever been. By coming together in song, a bond is felt
          between all audience members and the performer themselves.
        </p>
      </div>
    </Fade>
  );
};

export default index;
