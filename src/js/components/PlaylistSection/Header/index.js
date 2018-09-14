import React from 'react';
import Consumer from '../../../../configContext'

const Header = () => (
  <div className="header">
    <h3 className="test-inner">Top Songs</h3>
    <Consumer>
      {value => (
        <i
          onClick={value.state.toogleDisplay}
          data-show={value.state.currentDisplay}
          className="fas fas fa-chevron-right arrow-next"
        />
      )}
    </Consumer>
  </div>
);

export default Header;
