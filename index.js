// Import a library to help ceate a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
// or: import { Text, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import s from './src/styles/commonStyles';

// Create a component
// React Component is JS function that returns some amount of JSX
// in-turn JSX is diolect of JS that tells ReactNative
// what content we want to show on screen
const App = () => (
  <View style={s.container}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// const styles = {
//   container: {
//     backgroundColor: 'tomato',
//     flex: 1
//   }
// }

// Render it to the device
// Only the 'root' component uses 'AppRegistry'
AppRegistry.registerComponent('albums', () => App);
