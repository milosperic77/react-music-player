import React from 'react';
// import Tags from './Tags';

const Single = props => (
  <div className="single">
    <p className="uptitle">{props.songArtist}</p>
    <h1 className="single-song-title">{props.songName}</h1>
    {console.log(props.tags)}
    <div className="tags">
      {
        props.tags.map((tag, index) => (
          <div key={index} className="tag">
            {tag}
          </div>
        ))
      }
    </div>
  </div>
);

export default Single;
