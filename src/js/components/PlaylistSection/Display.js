import React from 'react';
import Playlist from './Playlist';
import Single from './Single';
import Consumer from '../../../configContext'

const Display = props => (
  <Consumer>
    {(value) => (
      <div className="display">
        {console.log(value.state)}
        {value.state.currentDisplay === 'playlist' ?
          <Playlist currentTrackIndex={props.currentTrackIndex} />
          :
          <Single
            songName={value.state.songName}
            tags={value.state.songTags}
            songArtist={value.state.songArtist}
          />
        }
      </div>
    )}
  </Consumer>
);

export default Display;
