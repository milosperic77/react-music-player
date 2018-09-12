import React from 'react';
import InputRange from 'react-input-range'
import Consumer from '../../../configContext'

class Controls extends React.Component{
  render() {
    return (
      <Consumer>
        {(value) => (
          <div data-screen={this.props.currentDisplay} className="controls">
            <div className="controls-wraper">
              <div className="song-buttons">
                <div onClick={value.prev} className="previous icon fas fa-backward">
                </div>
                {!this.props.playing &&
                  <div onClick={value.state.playPauseToggler}
                    className="play icon fas fa-play"/>
                }
                {this.props.playing &&
                  <div onClick={value.state.playPauseToggler}
                    className="play icon fas fa-pause"/>
                }
                <div onClick={value.next} className="next icon fas fa-forward"></div>
              </div>

              <div className="song-timeline">
                <InputRange
                  className="slider-fixes"
                  draggableTrack={true}
                  step={1}
                  minValue={0}
                  maxValue={100}
                  defaultValue={0}
                  value={value.state.timelinePosition}
                  onChange={(e)=>{value.getTimeline(e)}}
                />
                <div className="timeline-wraper">
                  <p className="current-time">{value.state.currentTime}</p>
                  <p className="timeline-duration">{value.state.songDuration}</p>
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
