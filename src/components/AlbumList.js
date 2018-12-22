
import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import AlbumDetails from './AlbumDetails';

export default class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount(){
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((res) => res.json())
        .then((res) => {
          this.setState({ albums: res});
        })
        .catch((error) => {
          console.error(error);
    });
  }

  renderAlbums(){
    return this.state.albums.map(album =>
      <AlbumDetails key={album.title}  album={album}/>
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({

});
