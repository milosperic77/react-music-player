import React, {Component} from "react";
import Song from './Song';
import Consumer from '../../../configContext'

class Playlist extends Component {
  render(){
    return(
      <div className="playlist">
        {
          <Consumer>
            {(value) => (
              value.sendSongs.map((song, index) => (
                <Song
                  key={index}
                  id={song.id}
                  songName={song.songName}
                  songTags={song.tags}
                  trackArtist={song.trackArtist}
                  songCover={song.songCover}
                  srcMp3={song.srcMp3}
                  isPlaying={value.state.playing}
                />
              ))
            )}
          </Consumer>
      }
      </div>
    )
  }
}

export default Playlist;
