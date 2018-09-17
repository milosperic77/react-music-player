import React from 'react';
import Consumer from '../../../../configContext';

const Header = () => (
  <Consumer>
    {value => (
      <div className="header">
        <h3 className="test-inner">
          {
            value.state.currentDisplay === 'single'
              ? 'Single' : 'Playlist'
          }
        </h3>
        <i
          onClick={value.toogleDisplay}
          data-show={value.state.currentDisplay}
          className="fas fas fa-chevron-right arrow-next"
        />
      </div>
    )}
  </Consumer>
);

export default Header;
