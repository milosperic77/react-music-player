import React from 'react';
import CoverImage from '../../../assets/images/album-cover-bj.jpg';

const AlbumCover = props => (
  <div
    className="album-cover"
    style={{
      backgroundImage: `url(${CoverImage})`
    }}
  >
  </div>
);

export default AlbumCover;
