import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { ConfigProvider } from "../configContext";


import AlbumSection from './components/AlbumSection/index';
import VolumeSection from './components/VolumeSection/index';
import PlaylistSection from './components/PlaylistSection/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConfigProvider>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Music Player</title>
            <link rel="canonical" href="http://mysite.com/example" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
          </Helmet>
          <div className="music-player">
            <PlaylistSection/>
            <AlbumSection />
            <VolumeSection />
          </div>
        </ConfigProvider>
      </div>
    );
  }
}

export default App;
