import React, { Component } from 'react';

import './style.css';

// playing image imports
import image1 from '../../media/images/layout/image1.jpg';
import image2 from '../../media/images/layout/image2.jpg';
import image3 from '../../media/images/layout/image3.jpg';
import image4 from '../../media/images/layout/image4.jpg';
import image5 from '../../media/images/layout/image5.jpg';
import image6 from '../../media/images/layout/image6.jpg';
import image7 from '../../media/images/layout/image7.jpg';
import image8 from '../../media/images/layout/image8.jpg';

// audio imports
import audio1 from '../../media/music/Samples.mp3';
import audio2 from '../../media/music/BeforeHeCheats.mp3';
import audio3 from '../../media/music/Jolene.mp3';
import audio4 from '../../media/music/PartofYourWorld.mp3';
import audio5 from '../../media/music/QeSeraSera.mp3';
import audio6 from '../../media/music/SecretLove.mp3';
import audio7 from '../../media/music/SinceYouveBeenGone.mp3';
import audio8 from '../../media/music/TheWhiteCliffsofDover.mp3';

export default class index extends Component {
  state = {
    playerShow: false,
    playing: false,
    playingIndex: 0
  };

  tracks = {
    image: [image1, image2, image3, image4, image5, image6, image7, image8],
    title: [
      'Samples Track',
      'Before He Cheats',
      'Jolene',
      'Part of Your World',
      'Qe Sera Sera',
      'Secret Love',
      "Since You've been gone",
      'White Cliffs of Dover'
    ],
    artist: [
      'various artists',
      'Carrie Underwood',
      'Dolly Parton',
      'Little Mermaid movie cast',
      'Doris Day',
      'Doris Day',
      'Rainbow',
      'Vera Lynn'
    ],
    track: [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8]
  };

  render() {
    const { playerShow, playing, playingIndex } = this.state;
    const { image, title, artist, track } = this.tracks;

    return (
      <div className='musicplayer-container'>
        {playerShow ? (
          <div className='opening-padding'></div>
        ) : (
          <div className='closing-padding'></div>
        )}
        <div className='MusicPlayer'>
          <div className='musicplayer-open-close'>
            {playerShow ? (
              <div className='musicplayer-close'>
                <h3
                  onClick={() => {
                    this.setState({
                      playerShow: !this.state.playerShow
                    });
                  }}
                >
                  <i className='fas fa-sort-down'></i>
                  close player
                </h3>
              </div>
            ) : (
              <div className='musicplayer-open'>
                <h3
                  onClick={() => {
                    this.setState({
                      playerShow: !this.state.playerShow
                    });
                  }}
                >
                  <i className='fas fa-sort-up'></i>
                  open player
                </h3>
              </div>
            )}
          </div>
          <div className='musicplayer-wrapper'>
            <div className='playing-image-wrapper'>
              {playing ? (
                <img
                  className='playing-image-on'
                  src={image[playingIndex]}
                  alt=''
                ></img>
              ) : (
                <img
                  className='playing-image-off'
                  src={image[playingIndex]}
                  alt=''
                ></img>
              )}
            </div>
            <div className='controls'>
              <div className='prev'>
                <i
                  className='fas fa-backward'
                  onClick={() => {
                    if (this.state.playingIndex > 0) {
                      this.setState({
                        playingIndex: this.state.playingIndex - 1
                      });
                    } else {
                      this.setState({
                        playingIndex: 7
                      });
                    }
                  }}
                ></i>
              </div>
              <div className='play-pause'>
                {playing ? (
                  <i
                    className='fas fa-pause'
                    onClick={() => {
                      this.setState({ playing: false });
                    }}
                  ></i>
                ) : (
                  <i
                    className='fas fa-play'
                    onClick={() => {
                      this.setState({
                        playing: true
                      });
                    }}
                  ></i>
                )}
              </div>
              <div className='next'>
                <i
                  className='fas fa-forward'
                  onClick={() => {
                    if (this.state.playingIndex < 7) {
                      this.setState({
                        playingIndex: this.state.playingIndex + 1
                      });
                    } else {
                      this.setState({
                        playingIndex: 0
                      });
                    }
                  }}
                ></i>
              </div>
            </div>
            <div className='playing-details'>
              <h3>{title[playingIndex]}</h3>
              <p style={{ fontWeight: 'bold', marginTop: '7px' }}>
                original artist
              </p>
              <p>
                <i>{artist[playingIndex]}</i>
              </p>
            </div>
          </div>
        </div>
        <br />
        {playing ? (
          <audio autoPlay src={track[playingIndex]} type='audio/mp3'>
            Your browser does not support the audio element.
          </audio>
        ) : null}
      </div>
    );
  }
}
