/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-console */

// Import the library for maikng the component 
import React, {Component} from 'react';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


import {
     View,
     ScrollView
    } from 'react-native';

// Class based component syntax
class AlbumList extends Component {
    
    // state Declaration
    // Initial state is empty array 
    state = { albumsList : []};


    // React native lifecycle method -  This will call initial
    // axios - used for Http request and resposne call
    // .then promise used  get the response. its called once http request completed.
    // this.setState - Update the component state if new data fetch from server. 
    componentWillMount() {
       console.log('componentWillMount album list')
       axios.get('https://rallycoding.herokuapp.com/api/music_albums')
       .then(response => this.setState( {albumsList: response.data}));
    }

    //map() method creates a new array (Ex:albumListArray) with the results of calling a function for every array element
    //map() method calls the provided function once for each element in an array, in order.
     //map() does not execute the function for array elements without values.
    renderAlbumList() {
       // Communicate Parent(AlbumList) to Child(AlbumDetail) we can use probs. albumProbs passed to child component.
       return this.state.albumsList.map(albumListArray => 
       <AlbumDetail key = {albumListArray.title} albumProps = {albumListArray}/>
       );

    }
    render () {

        console.log('render album list',this.state);
        return (
            <ScrollView>
                {this.renderAlbumList()}
           </ScrollView>
      
          );
    }
}


export default AlbumList;
