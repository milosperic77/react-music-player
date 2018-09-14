import React from 'react';
import Consumer from '../../../configContext';

import Header from './Header/index';
import Display from './Display/index';
import Controls from './Controls/index';

const PlaylistSection = props => (
  <div className="playlist-section">
    <Header />
    <Display
      currentTrackIndex={props.currentTrackIndex}
    />
    <Consumer>
      {value => (
        <Controls
          playing={value.state.playing}
          currentDisplay={value.state.currentDisplay}
        />
      )}
    </Consumer>
  </div>
);

export default PlaylistSection;
