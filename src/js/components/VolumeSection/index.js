import React from 'react';
import VolumeSlider from './VolumeSlider';

import logo from '../../../assets/logos/logo.png';

const VolumeSection = () => (
  <div className="volume-section">
    <div
      className="logo"
      style={{
        backgroundImage: `url(${logo})`,
      }}
    />

    <VolumeSlider />
  </div>
);

export default VolumeSection;
