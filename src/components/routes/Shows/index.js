import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import './style.css';

import flag from '../../../media/images/layout/union-jack.jpg';
import hat from '../../../media/images/layout/santa-hat.jpg';
import rnr from '../../../media/images/layout/rnr.jpg';

const index = () => {
  return (
    <Fade>
      <div className='shows'>
        <h2>SHOWS</h2>
        <Slide right delay={700}>
          <h3 className='show-title'>Bless Them All</h3>
          <div className='description-1'>
            <div className='column-1'>
              <img src={flag} alt='' width='140px' />
            </div>
            <p>
              An upbeat yet heartfelt tribute to those who suffered or paid the
              ultimate sacrifice from 1938 to 1946. Telling the story of a young
              lady whose special man is far far away, yet are together in the
              songs which laid the setting of the era. Featuring classics such
              as <span className='song-title'>White Cliffs of Dover</span>,{' '}
              <span className='song-title'>We'll Meet Again</span>, and the
              titular <span className='song-title'>Bless Them All.</span>
            </p>
          </div>
        </Slide>
        <Slide left delay={1400}>
          <h3 className='show-title'>1950's Rock and Roll</h3>
          <div className='description-2'>
            <p>
              Jive with your feet, hands, or just tap your toes, to hits such as{' '}
              <span className='song-title'>Rock Around the Clock</span>,{' '}
              <span className='song-title'>Tutti-Frutti</span>, and{' '}
              <span className='song-title'></span>. This homage to the juke box
              and Brylcreem era will make anyone feel 17 again.
            </p>
            <div className='column-2'>
              <img src={rnr} alt='' height='110px' />
            </div>
          </div>
        </Slide>
        <Slide right delay={2100}>
          <h3 className='show-title'>Christmas Spectacular</h3>
          <div className='description-1'>
            <div className='column-1'>
              <img src={hat} alt='' height='110px' />
            </div>
            <p>
              With warmth that can fight off any winter chills, a festive
              extravaganza ranging from{' '}
              <span className='songtitle'>
                Rocking Around the Christmas Tree
              </span>{' '}
              to <span className='song-title'>White Christmas</span>. Guaranteed
              to have you clapping along, shaking your sleigh-bells, and humming
              till late January.
            </p>
          </div>
        </Slide>
      </div>
    </Fade>
  );
};

export default index;
