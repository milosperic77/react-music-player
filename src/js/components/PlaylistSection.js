import React from 'react';
import Consumer from '../../configContext'

import Header from './PlaylistSection/Header';
import Display from './PlaylistSection/Display';
import Controls from './PlaylistSection/Controls';

const PlaylistSection = props => (
  <div className="playlist-section">
    <Header />
    <Display
      currentTrackIndex={props.currentTrackIndex}
    />
    <Consumer>
      {(value) => (
        <Controls
          playing={value.state.playing}
          currentDisplay={value.state.currentDisplay}
        />
      )}
    </Consumer>
  </div>
);

export default PlaylistSection;
