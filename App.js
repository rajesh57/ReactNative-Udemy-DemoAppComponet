/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://rallycoding.herokuapp.com/api/music_albums
 *
 * @format
 * @flow
 */
// This is Parent Component of the Application
import React, {Component} from 'react';

import {
   StyleSheet,
   View
  } from 'react-native';

  // importing components
  import Header from './src/components/Header';
  import AlbumList from './src/components/AlbumList';


  /*
   The Components(Header, AlbumList) render
  */

export default class App extends Component {
  render() {
    return (
       <View style = {{flex:1}}> 
           <Header HeaderText = 'Rajesh kumar'/> 
           <AlbumList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
