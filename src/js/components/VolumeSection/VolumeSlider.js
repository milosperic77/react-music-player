import React from 'react';
import Slider from 'react-rangeslider';

import Consumer from '../../../configContext';

const VolumeSlider = () => (
  <div className="volume-slider" data-vol-status="true">
    <Consumer>
      {value => (
        <div className="volume-wraper">
          <Slider
            min={0}
            max={100}
            value={value.state.volume}
            orientation="vertical"
            onChange={(e) => { value.getVolume(e); }}
          />
          <i className="fas fa-volume-up volume-value" />
        </div>
      )}
    </Consumer>
  </div>
);

export default VolumeSlider;
