import React, {Component} from "react";
import Song from './Song';
import Consumer from '../../../configContext'

import songs from '../../../assets/data/songs.js';

class Playlist extends Component {
  render(){
    return(
      <div className="playlist">
        {songs.songs.map((song, index) => (
          <Consumer key={index} >
            {(value) => (
              <Song
                key={index}
                id={song.id}
                songName={song.songName}
                trackArtist={song.trackArtist}
                songCover={song.songCover}
                srcMp3={song.srcMp3}
                getSong={value.state.songTaker}
              />
            )}
          </Consumer>
        ))}
      </div>
    )
  }
}

export default Playlist;
