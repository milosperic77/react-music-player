import React from 'react';
import InputRange from 'react-input-range';
import Consumer from '../../../configContext';

const VolumeSlider = () => (
  <div className="volume-slider" data-vol-status="true">
    <Consumer>
      {value => (
        <div className="volume-wraper">
          <InputRange
            className="slider-fixes volume-range"
            defaultValue={value.state.volume}
            minValue={0}
            maxValue={100}
            value={value.state.volume}
            onChange={(e) => { value.state.getVolume(e); }}
          />
          <i className="fas fa-volume-up volume-value" />
        </div>
      )}
    </Consumer>
  </div>
);

export default VolumeSlider;
