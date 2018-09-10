import React from 'react';

const AlbumCover = props => (
  <div
    className="album-cover"
    style={{
      backgroundImage: `url(${props.songCover})`
    }}
  >
  </div>
);

export default AlbumCover;
