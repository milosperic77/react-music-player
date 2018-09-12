import React, { Component, createContext } from "react";
import songs from './assets/data/songs.js';
const { Provider, Consumer } = createContext();

class ConfigProvider extends Component {
  constructor(props) {
    super(props);

    this.getSong = this.getSong.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.playPauseToggler = this.playPauseToggler.bind(this);
    this.volumeStatus = this.volumeStatus.bind(this);
    this.timelineStatus = this.timelineStatus.bind(this);
    this.getUpdatedTime = this.getUpdatedTime.bind(this);
    this.toogleDisplay = this.toogleDisplay.bind(this);
    this.sendSongs = this.sendSongs.bind(this);
    this.onSongClick = this.onSongClick.bind(this);

    this.state = {
      playing: false,
      songName: 'None',
      songArtist: 'None',
      songTags: [],
      songCover: '',
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
      toogleDisplay: this.toogleDisplay,
      prev: this.prev,
      next: this.next
    };

    this.getSongs = songs.songs;
  }

  // napisati uz nov pristup
  // propsove ispod valuae i redom sve metode iz statea
  // nov algoritam za ceo interfejs :D

  sendSongs(){
    return this.getSongs;
  }

  onSongClick(index){
    let songId = index.getAttribute('data-id');
    this.setState({
      currentTrackIndex: songId,
      songArtist: this.getSongs[songId].trackArtist,
      songName: this.getSongs[songId].songName,
      songTags: this.getSongs[songId].songTags,
      songId: this.getSongs[songId].id,
      songCover: this.getSongs[songId].songCover,
      songSrc: this.getSongs[songId].srcMp3,
      songDuration: this.state.duration
    });
    // this.getSongs[songId].load();
    // this.getSongs[songId].play();
    // if(this.state.currentTrackIndex === song.songId && this.state.playing){
      // this.setState((state, props) => {
      //   return {
      //     playing: false,
      //     currentTrackIndex: song.songId,
      //     songPath: song.songSrc
      //   };
      // }, this.pauseAudio());
    // } else if(!this.state.playing || this.state.currentTrackIndex !== song.songId) {
    //   this.setState((state, props) => {
    //     return {
    //       songName: song.songName,
    //       songArtist: song.songArtist,
    //       playing: true,
    //       currentTrackIndex: song.songId,
    //       songPath: song.songSrc,
    //       songDuration: song.songDuration,
    //       songTags: song.songTags,
    //       songCover: song.songCover
    //     };
    //   }, this.playAudio());
    // }
  }

  // setDurations = () => {
  //   const minutes = parseInt(this.audiofile.duration / 60, 10);
  //   const second = parseInt(this.audiofile.duration % 60, 10);
  //
  //   this.setState({
  //     duration: `${minutes}:${second}`
  //   });
  // }

  prev(){
    const id = this.getSongs[this.state.currentTrackIndex - 1].id;
    const trackArtist = this.getSongs[this.state.currentTrackIndex - 1].trackArtist;
    const songName = this.getSongs[this.state.currentTrackIndex - 1].songName;
    const srcMp3 = this.getSongs[this.state.currentTrackIndex - 1].srcMp3;
    const songCover = this.getSongs[this.state.currentTrackIndex - 1].songCover;
    const tags = this.getSongs[this.state.currentTrackIndex - 1].tags;

    const minutes = parseInt(this.getSongs[this.state.currentTrackIndex - 1].duration / 60, 10);
    const second = parseInt(this.getSongs[this.state.currentTrackIndex - 1].duration % 60, 10);

    console.log(`${minutes}:${second}`);

    this.setState((state, props) => {
      let currentIndex = state.currentTrackIndex;
      if (currentIndex <= 0) {
        return(
          null
        )
      } else {
        return {
          playing: true,
          songName: songName,
          songArtist: trackArtist,
          songTags: tags,
          songCover: songCover,
          currentTrackIndex: id,
          songPath: srcMp3
        };
      }
    },() => {
      this.audioElement.load();
      this.audioElement.play();
    });
  }

  next(){
    const id = this.getSongs[this.state.currentTrackIndex + 1].id;
    const trackArtist = this.getSongs[this.state.currentTrackIndex + 1].trackArtist;
    const songName = this.getSongs[this.state.currentTrackIndex + 1].songName;
    const srcMp3 = this.getSongs[this.state.currentTrackIndex + 1].srcMp3;
    const songCover = this.getSongs[this.state.currentTrackIndex + 1].songCover;
    const tags = this.getSongs[this.state.currentTrackIndex + 1].tags;

    this.setState((state, props) => {
      let currentIndex = state.currentTrackIndex;
      console.log(this.getSongs.length);
      if (currentIndex > this.getSongs.length) {
        return null;
      } else {
        return {
          playing: true,
          songName: songName,
          songArtist: trackArtist,
          songTags: tags,
          songCover: songCover,
          currentTrackIndex: id,
          songPath: srcMp3
        };
      }
    },() => {
      this.audioElement.load();
      this.audioElement.play();
    });
  }

  toogleDisplay(){
    if(this.state.currentDisplay === 'playlist'){
      this.setState({
        currentDisplay: 'single'
      });
    } else if(this.state.currentDisplay === 'single'){
      this.setState({
        currentDisplay: 'playlist'
      });
    }
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

  timelineStatus(e){
    const currentDuration = this.audioElement.duration;
    this.audioElement.currentTime = currentDuration * (e / 100);
  }

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

  //za brisanje
  getSong(song){
    // this.audioElement.load();

    // if(this.state.currentTrackIndex === song.songId && this.state.playing){
    //   this.setState((state, props) => {
    //     return {
    //       playing: false,
    //       currentTrackIndex: song.songId,
    //       songPath: song.songSrc
    //     };
    //   }, this.pauseAudio());
    // } else if(!this.state.playing || this.state.currentTrackIndex !== song.songId) {
    //   this.setState((state, props) => {
    //     return {
    //       songName: song.songName,
    //       songArtist: song.songArtist,
    //       playing: true,
    //       currentTrackIndex: song.songId,
    //       songPath: song.songSrc,
    //       songDuration: song.songDuration,
    //       songTags: song.songTags,
    //       songCover: song.songCover
    //     };
    //   }, this.playAudio());
    // }
  }

  playAudio(){
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
        state: this.state,
        sendSongs: this.sendSongs(),
        onSongClick: this.onSongClick.bind(this),
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
