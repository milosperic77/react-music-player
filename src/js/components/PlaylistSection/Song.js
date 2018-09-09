import React, {Component} from "react";
import Consumer from '../../../configContext'

class Song extends Component {
  getSongPropsClick = () => {
    const songProps = {
      songArtist: this.props.trackArtist,
      songId: this.props.id,
      songName: this.props.songName,
      songCover: this.props.songCover,
      songSrc: this.props.srcMp3
    }
    this.props.getSong(songProps);
  }

  setDuration(){
    console.log(this.props.srcMp3.duration)
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

              <div className="song-info">
                <p className="artist">{this.props.trackArtist}</p>
                <h4 className="song-name">{this.props.songName}</h4>
                <div className='song-duration'>
                  <div className='eq' data-cancel='false'>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <p className='full-duration'>0:00</p>
                </div>
              </div>
          </div>
        )}
      </Consumer>
    )
  }
}

export default Song;
