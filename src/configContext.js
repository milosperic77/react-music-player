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

    this.state = {
      playing: false,
      volume: 50,
      currentTrackIndex: 0,
      songPath: '',
      currentDisplay: 'playlist',
      songTaker: this.getSong,
      playPauseToggler: this.playPauseToggler,
      getVolume: this.volumeStatus,
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

  // set duration for single song
  // update duration

  volumeStatus(e){
    const volume = e;
    console.log(e);
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
        songPath: pesma.songSrc
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
        <audio preload="metadata" ref={(audio) => {this.audioElement = audio}} song-id={this.state.currentTrackIndex}>
          <source src={this.state.songPath}/>
        </audio>
        {this.props.children}
      </Provider>
    );
  }
}

export { ConfigProvider };
export default Consumer;
