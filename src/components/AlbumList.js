import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios'; // makes HTTP request
import AlbumDetail from './AlbumDetail';

// functional based component. Static data
// const AlbumList = () => {
//   return (
//     <View>
//       <Text>Album List!</Text>
//     </View>
//   );
// };

// ES6 class based component
class AlbumList extends Component {
  state = { albums: [] };

  // lifecycle method
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  // Helper method
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render () {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
} // classes dont require semi colon ;

export default AlbumList;
