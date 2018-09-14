import React from 'react';
import Song from './Song';
import Consumer from '../../../../configContext';

const Playlist = () => (
  <div className="playlist">
    {
      <Consumer>
        {value => (
          value.sendSongs.map(song => (
            <Song
              key={song.id}
              id={song.id}
              songName={song.songName}
              songTags={song.tags}
              trackArtist={song.trackArtist}
              songCover={song.songCover}
              srcMp3={song.srcMp3}
              isPlaying={value.state.playing}
              isActive={song.id === value.state.currentTrackIndex
                ? true : false}
            />
          ))
        )}
      </Consumer>
  }
  </div>
);

export default Playlist;
