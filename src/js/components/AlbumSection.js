import React from 'react';
import AlbumCover from './AlbumSection/AlbumCover';

import Consumer from '../../configContext'

const AlbumSection = props => (
  <div className="album-section">
    <Consumer>
      {(value)=>(
        <AlbumCover songCover={value.state.songCover} />
      )}
    </Consumer>
  </div>
);

export default AlbumSection;
