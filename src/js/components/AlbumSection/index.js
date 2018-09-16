import React from 'react';
import AlbumCover from './AlbumCover';

import Consumer from '../../../configContext';
import songs from '../../../assets/data/songs';

const AlbumSection = () => (
  <div className="album-section">
    <Consumer>
      {value => (
        <AlbumCover songCover={songs.songs[value.state.song].songCover} />
      )}
    </Consumer>
  </div>
);

export default AlbumSection;
