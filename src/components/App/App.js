import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
//import { Spotify } from '../../util/spotify';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={SearchResults: [
      {
        name: "Example Track Name",
        artist: "Example Track Artist",
        album: "Example Track Album",
        id:1
      },
      {
        name: "Example Track Name 2",
        artist: "Example Track Artist 2",
        album: "Example Track Album 2",
        id:2
      },
    ]}
  } 

  render() {
    return (
      <div >
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.SearchResults}/>
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
