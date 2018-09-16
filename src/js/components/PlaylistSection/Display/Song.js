import React, { Component } from 'react';
import Eq from './Eq';
import Consumer from '../../../../configContext';

class Song extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   duration: ''
  //   // }
  // }

  // setDurations = (e) => {
  //   const minutes = parseInt(e.target.duration / 60, 10);
  //   const cS = parseInt(e.target.duration % 60, 10);
  //   const second = cS < 10 ? `0${cS}` : cS;
  //
  //   //ubaciti set state
  // }

  render() {
    return (
      <Consumer>
        {value => (
          <div
            onClick={(e) => { value.onSongClick(e.target); }}
            className="song"
            data-id={this.props.id}
            // data-duration={this.state.duration}
          >
            <div className="cover-image">
              <div
                className="image"
                style={{ backgroundImage: `url(${this.props.songCover})` }}
              />
            </div>
            <audio
              src={this.props.srcMp3}
              onLoadedMetadata={this.setDurations}
            />
            <div className="song-info">
              <p className="artist">{this.props.trackArtist}</p>
              <h4 className="song-name">{this.props.songName}</h4>
              <div className="song-duration">
                {this.props.isActive ? <Eq wave={value.state.playing} /> : ''}
                <p className="full-duration">
                  {/* {this.state.duration} */}
                  0:00
                </p>
              </div>
              </div>
          </div>
        )}
      </Consumer>
    )
  }
}

export default Song;
