import React from 'react';
// import Tags from './Tags';

const Single = props => (
  <div className="single">
    <p className="uptitle">{props.songArtist}</p>
    <h1 className="single-song-title">{props.songName}</h1>
    <div className="tags">
      {
        props.tags.map(tag => (
          <div key={tag.id} className="tag">
            {tag}
          </div>
        ))
      }
    </div>
  </div>
);

export default Single;
