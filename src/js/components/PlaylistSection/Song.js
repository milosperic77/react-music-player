import React, {Component} from "react";
import Consumer from '../../../configContext'

class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: '0:00'
    }
  }

  getSongPropsClick = () => {
    const songProps = {
      songArtist: this.props.trackArtist,
      songId: this.props.id,
      songName: this.props.songName,
      songCover: this.props.songCover,
      songSrc: this.props.srcMp3,
      songDuration: this.state.duration
    }
    this.props.getSong(songProps);
  }

  setDurations = () => {
    const minutes = parseInt(this.audiofile.duration / 60, 10);
    const second = parseInt(this.audiofile.duration % 60, 10);

    this.setState({
      duration: `${minutes}:${second}`
    });
  }

  render(){
    return(
      <Consumer>
        {(value) => (
          <div
            onClick={this.getSongPropsClick}
            className="song"
            data-id={this.props.id}
            >
              <div className="cover-image">
                <div
                  className="image"
                  style={{ backgroundImage: `url(${this.props.songCover})`}}>
                </div>
              </div>

              <audio onLoadedMetadata={this.setDurations} ref={(audio)=>{ this.audiofile = audio }} src={this.props.srcMp3} />

              <div className="song-info">
                <p className="artist">{this.props.trackArtist}</p>
                <h4 className="song-name">{this.props.songName}</h4>
                <div className='song-duration'>
                  <div className='eq' data-cancel='false'>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <p className='full-duration'>{this.state.duration}</p>
                </div>
              </div>
          </div>
        )}
      </Consumer>
    )
  }
}

export default Song;
