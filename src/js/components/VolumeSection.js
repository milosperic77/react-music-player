import React from 'react';
import VolumeSlider from './VolumeSection/VolumeSlider';

// import logo from '../../assets/logos/saco-logo.png';

const VolumeSection = props => (
  <div className="volume-section">
    {/* <div
      className="logo"
      style={{
        backgroundImage: `url(${logo})`
      }}
    ></div> */}

    <VolumeSlider />
  </div>
);

export default VolumeSection;
