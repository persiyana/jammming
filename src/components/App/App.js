import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
//import { Spotify } from '../../util/spotify';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      searchResults: [
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
      ],
      playlistName: "Name",
      playlistTracks:[
        {
          name: "Example Track Name 3",
          artist: "Example Track Artist 3",
          album: "Example Track Album 3",
          id:3
        },
      ]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  } 

  addTrack(track){
    const foundTrack = this.state.playlistTracks.find(
      (playlistTrack) => playlistTrack.id===track.id);
    const newTrack = this.state.playlistTracks.concat(track);
    foundTrack 
      ? console.log("Track already exists") 
      : this.setState({playlistTracks: newTrack});
    
  }

  removeTrack(track){
    const newTrack = this.state.playlistTracks.filter(
      oldTrack => oldTrack.id !== track.id
    )
    this.setState({playlistTracks: newTrack});
  }

  updatePlaylistName(newName){
    this.setState({playlistName: newName})
  }

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
  }

  search(term){
    console.log(term);
  }

  render() {
    return (
      <div >
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults  
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
