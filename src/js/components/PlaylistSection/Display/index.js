import React from 'react';
import Playlist from './Playlist';
import Single from './Single';
import Consumer from '../../../../configContext';

// pozovem listu i sibam audioElement
// song[value.state.song].songName
const Display = () => (
  <Consumer>
    {value => (
      <div className="display" data-show={value.state.currentDisplay}>
        <Playlist />

        <Single
          songName={value.state.song}
          tags={value.state.songTags}
          songArtist={value.state.songArtist}
        />
      </div>
    )}
  </Consumer>
);

export default Display;
