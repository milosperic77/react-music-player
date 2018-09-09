import React, { Component } from 'react';
import Slider from 'rc-slider';
import Consumer from '../../../configContext'

class VolumeSlider extends Component {
  render(){
    return(
      <div className="volume-slider" data-vol-status="true">
        <Consumer>
          {(value) => (
            <div className="volume-wraper">
              <Slider
                className="slider-fixes volume-range"
                vertical
                defaultValue={50}
                min={0}
                max={100}
                onChange={(e)=>{value.state.getVolume(e)}}
              />
              <i className="fas fa-volume-up volume-value"></i>
            </div>
          )}
        </Consumer>
      </div>
    )
  }
}

export default VolumeSlider;
