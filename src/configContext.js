import React, { Component, createContext } from 'react';
import songs from './assets/data/songs';

const { Provider, Consumer } = createContext();

class ConfigProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDisplay: 'playlist',
      song: 0,
      playing: false,
      volume: 100,
      currentTime: '0:00',
      songDuration: '0:00',
    };
  }

  onSongClick = (index) => {
    const songId = index.getAttribute('data-id');
    const integer = parseInt(songId, 10);
    this.audioElement.load();
    if (this.state.currentTrackIndex === integer && this.state.playing) {
      this.setState({
        playing: false,
      }, this.pauseAudio());
      this.audioElement.pause();
    } else if (this.song !== integer || !this.state.playing) {
      this.setState({
        playing: true,
        song: integer,
        currentDisplay: 'single',
      }, this.playAudio());
    }
  }

  durations = () => {
    const minutes = parseInt(this.audioElement.duration / 60, 10);
    const cS = parseInt(this.audioElement.duration % 60, 10);
    const second = cS < 10 ? `0${cS}` : cS;
    const duration = `${minutes}:${second}`;

    this.setState({
      songDuration: duration,
    });
  }

  toogleDisplay = () => {
    if (this.state.currentDisplay === 'playlist') {
      this.setState({
        currentDisplay: 'single',
      });
    } else if (this.state.currentDisplay === 'single') {
      this.setState({
        currentDisplay: 'playlist',
      });
    }
  }

  prev = () => {
    this.setState((prevState) => {
      const currentIndex = this.state.song;
      if (currentIndex <= 0) {
          return null;
      }
      return {
        playing: true,
        song: prevState.song - 1,
      };
    }, () => {
      this.audioElement.load();
      this.audioElement.play();
    });
  }

  next = () => {
    this.setState((prevState) => {
      const currentIndex = this.state.song;
      if (currentIndex >= songs.songs.length) {
        return null;
      }
      return {
        playing: true,
        song: prevState.song + 1,
      };
    }, () => {
      this.audioElement.load();
      this.audioElement.play();
    });
  }

  setUpdatedTime = () => {
    const minutes = parseInt(this.audioElement.currentTime / 60, 10);
    const cS = parseInt(this.audioElement.currentTime % 60, 10);
    const seconds = cS < 10 ? `0${cS}` : cS;

    const ct = parseInt(this.audioElement.currentTime, 10);
    const cd = parseInt(this.audioElement.duration, 10);
    const rawPosition = (ct / cd) * 100;

    const position = Math.floor(rawPosition);

    this.setState({
      currentTime: `${minutes}:${seconds}`,
      timelinePosition: position,
    });
  };

  getTimeline = (e) => {
    const currentDuration = this.audioElement.duration;
    this.audioElement.currentTime = currentDuration * (e / 100);
  }

  getVolume = (e) => {
    const volume = e;
    this.setState({ volume }, this.volumeLevel());
  }

  volumeLevel = () => {
    const formatVolumeValue = this.state.volume / 100;
    this.audioElement.volume = formatVolumeValue;
  }

  playPauseToggler = () => {
    if (!this.state.playing) {
      this.setState({
        playing: true,
      });
      this.playAudio();
    } else if (this.state.playing) {
      this.setState({
        playing: false,
      });
      this.pauseAudio();
    }
  }

  playAudio = () => {
    this.audioElement.play();
  }

  pauseAudio = () => {
    this.audioElement.pause();
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          onSongClick: this.onSongClick,
          getTimeline: this.getTimeline,
          playPauseToggler: this.playPauseToggler,
          play: this.play,
          pause: this.pause,
          prev: this.prev,
          next: this.next,
          toogleDisplay: this.toogleDisplay,
          getVolume: this.getVolume,
        }}
      >
        <audio
          onLoadedMetadata={this.durations}
          preload="auto"
          ref={(audio) => { this.audioElement = audio; }}
          onTimeUpdate={this.setUpdatedTime}
          song-id={this.state.song}
        >
          <track kind="captions" />
          <source src={songs.songs[this.state.song].srcMp3} />
        </audio>
        {this.props.children}
      </Provider>
    );
  }
}

export { ConfigProvider };
export default Consumer;
