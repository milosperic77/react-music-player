import React from 'react';
import InputRange from 'react-input-range';
import Consumer from '../../../../configContext';

const Controls = props => (
  <Consumer>
    {value => (
      <div data-screen={props.currentDisplay} className="controls">
        <div className="controls-wraper">
          <div className="song-buttons">
            <div
              onClick={value.prev}
              data-available={value.state.currentTrackIndex === 0 ? false : true}
              className="previous icon fas fa-backward"
            />

            {!props.playing && (
              <div
                onClick={value.state.playPauseToggler}
                data-available={value.state.playAvaiable}
                className="play icon fas fa-play"
              />
            )}

            {props.playing && (
              <div
                onClick={value.state.playPauseToggler}
                className="play icon fas fa-pause"
              />
            )}

            <div
              onClick={value.next}
              data-available={value.state.currentTrackIndex === (value.state.allSongs - 1) ? false : true}
              className="next icon fas fa-forward"
            />

          </div>

          <div className="song-timeline">
            <InputRange
              className="slider-fixes"
              draggable
              step={1}
              minValue={0}
              maxValue={100}
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
