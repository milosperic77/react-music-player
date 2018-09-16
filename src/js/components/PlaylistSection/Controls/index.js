import React from 'react';
import Slider from 'react-rangeslider';

import Consumer from '../../../../configContext';

const Controls = props => (
  <Consumer>
    {value => (
      <div data-screen={props.currentDisplay} className="controls">
        <div className="controls-wraper">
          <div className="song-buttons">
            <div
              onClick={value.prev}
              className="previous icon fas fa-backward"
              data-available={
                value.state.currentTrackIndex === 0 ? false : true
              }
            />

            {!props.playing && (
              <div
                onClick={value.playPauseToggler}
                className="play icon fas fa-play"
                data-available={value.state.playAvaiable}
              />
            )}

            {props.playing && (
              <div
                onClick={value.playPauseToggler}
                className="play icon fas fa-pause"
              />
            )}

            <div
              onClick={value.next}
              className="next icon fas fa-forward"
              data-available={
                value.state.currentTrackIndex === (value.state.allSongs - 1)
                ? false : true
              }
            />

          </div>

          <div className="song-timeline">
            <Slider
              draggable
              step={1}
              min={0}
              max={100}
              defaultValue={0}
              value={value.state.timelinePosition}
              onChange={(e) => { value.getTimeline(e); }}
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

export default Controls;
