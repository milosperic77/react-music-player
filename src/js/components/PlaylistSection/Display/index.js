import React from 'react';
import Playlist from './Playlist';
import Single from './Single';
import Consumer from '../../../../configContext';
import songs from '../../../../assets/data/songs';

const Display = () => (
  <Consumer>
    {value => (
      <div className="display" data-show={value.state.currentDisplay}>
        <Playlist />
        <Single
          songName={songs.songs[value.state.song].songName}
          tags={songs.songs[value.state.song].tags}
          songArtist={songs.songs[value.state.song].trackArtist}
        />
      </div>
    )}
  </Consumer>
);

export default Display;
