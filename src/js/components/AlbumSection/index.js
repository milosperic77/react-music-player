import React from 'react';
import AlbumCover from './AlbumCover';

import Consumer from '../../../configContext';

const AlbumSection = () => (
  <div className="album-section">
    <Consumer>
      {value => (
        <AlbumCover songCover={value.state.songCover} />
      )}
    </Consumer>
  </div>
);

export default AlbumSection;
