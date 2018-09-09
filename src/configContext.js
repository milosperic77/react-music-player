import React, { Component, createContext } from "react";
const { Provider, Consumer } = createContext();

class ConfigProvider extends Component {
  constructor(props) {
    super(props);

    this.getSong = this.getSong.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
    this.playPauseToggler = this.playPauseToggler.bind(this);
    this.volumeStatus = this.volumeStatus.bind(this);
    this.timelineStatus = this.timelineStatus.bind(this);
    this.getUpdatedTime = this.getUpdatedTime.bind(this);

    this.state = {
      playing: false,
      songPath: '',
      currentTrackIndex: 0,
      currentTime: '0:00',
      songDuration: '0:00',
      volume: 50,
      currentDisplay: 'playlist',
      timelinePosition: 0,
      songTaker: this.getSong,
      playPauseToggler: this.playPauseToggler,
      getVolume: this.volumeStatus,
      getTimeline: this.timelineStatus,
      toogleDisplay: () => {
        if(this.state.currentDisplay === 'playlist'){
          this.setState({
            currentDisplay: 'single'
          });
        } else if(this.state.currentDisplay === 'single'){
          this.setState({
            currentDisplay: 'playlist'
          });
        }
      },
    };
  }

  getUpdatedTime(){
    const minutes = parseInt(this.audioElement.currentTime / 60, 10);
    const cS = parseInt(this.audioElement.currentTime % 60, 10);
    const seconds = cS < 10 ? `0${cS}` : cS;

    const ct = parseInt(this.audioElement.currentTime, 10);
    const cd = parseInt(this.audioElement.duration, 10);
    const rawPosition = (ct / cd) * 100;

    const position = Math.floor(rawPosition);

    this.setState({
      currentTime: `${minutes}:${seconds}`,
      timelinePosition: position
    });
  };

  timelineStatus(){
    // const ct = parseInt(this.audioElement.currentTime, 10);
    // const cd = parseInt(this.audioElement.duration, 10);

    // console.log();
    // const position = (ct / cd) * 100;
    // const size = position.toFixed(1);
  }

  // const scrub = (e) => {
  //   const audioFile = songs[currentSong].querySelector('.audio-file');
  //   const currentDuration = audioFile.duration;
  //   audioFile.currentTime = currentDuration * (e.target.value / 100);
  // };

  // update duration

  volumeStatus(e){
    const volume = e;
    this.setState((state, props) => {
      return {
        volume: volume,
      };
    }, this.volumeLevel());
  }

  playPauseToggler(){
    if(!this.state.playing){
      this.setState({
        playing: true,
      });
      this.playAudio();
    } else if(this.state.playing){
      this.setState({
        playing: false,
      });
      this.pauseAudio();
    }
  }

  getSong(pesma){
    this.setState((state, props) => {
      return {
        playing: true,
        currentTrackIndex: pesma.songId,
        songPath: pesma.songSrc,
        songDuration: pesma.songDuration
      };
    }, this.playAudio());

    // ovaj neda posto kaze da nesme play() da se interuptije sa pause()
    if(this.state.currentTrackIndex === pesma.songId){
      this.setState((state, props) => {
        return {
          playing: false,
          currentTrackIndex: pesma.songId,
          songPath: pesma.songSrc
        };
      }, this.pauseAudio());
    }
  }

  playAudio(){
    this.audioElement.load();
    this.audioElement.play();
  }

  pauseAudio(){
    this.audioElement.pause();
  }

  volumeLevel(){
    const formatVolumeValue = this.state.volume / 100;
    this.audioElement.volume = formatVolumeValue;
  }

  render() {
    return (
      <Provider value={{
        state: this.state
      }}>
        <audio
          preload="metadata"
          ref={(audio) => {this.audioElement = audio}}
          onTimeUpdate={this.getUpdatedTime}
          song-id={this.state.currentTrackIndex}
        >
          <source src={this.state.songPath}/>
        </audio>
        {this.props.children}
      </Provider>
    );
  }
}

export { ConfigProvider };
export default Consumer;
