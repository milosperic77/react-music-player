import React from 'react';
import Slider from 'rc-slider';
import Consumer from '../../../configContext'

class Controls extends React.Component{
  render() {
    return (
      <Consumer>
        {(value) => (
          <div data-screen={this.props.currentDisplay} className="controls">
            <div className="controls-wraper">
              <div className="song-buttons">
                <div onClick={this.controlKlik} className="previous icon fas fa-backward">
                </div>
                {!this.props.playing &&
                  <div onClick={value.state.playPauseToggler}
                    className="play icon fas fa-play"/>
                  }
                  {this.props.playing &&
                    <div onClick={value.state.playPauseToggler}
                      className="play icon fas fa-pause"/>
                    }
                    <div onClick={this.controlKlik} className="next icon fas fa-forward"></div>
              </div>

              <div className="song-timeline">
                <Slider className="slider-fixes" />
                <div className="timeline-wraper">
                  <p className="current-time">0:00</p>
                  <p className="timeline-duration">3:23</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Controls;
