import React from 'react';

const AlbumCover = props => (
  <div
    className="album-cover"
    style={{
      backgroundImage: `url(${props.songCover})`,
    }}
  />
);

export default AlbumCover;
