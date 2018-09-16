import React from 'react';
import Song from './Song';
import Consumer from '../../../../configContext';
import songs from '../../../../assets/data/songs';

const Playlist = () => (
  <div className="playlist">
    {
      <Consumer>
        {value => (
          songs.songs.map(song => (
            <Song
              key={song.id}
              id={song.id}
              songName={song.songName}
              songTags={song.tags}
              trackArtist={song.trackArtist}
              songCover={song.songCover}
              srcMp3={song.srcMp3}
              playing={value.state.playing}
            />
          ))
        )}
      </Consumer>
    }
  </div>
);

export default Playlist;
