/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */

import React from 'react';
import {Text,View,Image} from 'react-native';
import AlbumCard from './AlbumCard';
import AlbumCardSection from './AlbumCardSection';
import AlbumButton from './AlbumButton';

const AlbumDetail = (props) => {

    console.log('album details props ===', props.albumProps.title);
    console.log('album details thumbnail_image ===', props.albumProps.thumbnail_image);
    // code refactaring
    const {
         headerContentStyle,
         thumbnailStyle,
         thumbnailContainerStyle,
         imageStyle
          } = albumDetailsStyle

   // This is parent component props passing to child
    return (
            <AlbumCard >

                 <AlbumCardSection>
                          <View style = {thumbnailContainerStyle}> 
                             <Image style = {thumbnailStyle} source = {{uri:props.albumProps.thumbnail_image}}/>
                          </View>
                          <View style = {headerContentStyle}>
                               <Text> {props.albumProps.title} </Text>
                               <Text> {props.albumProps.artist} </Text>
                          </View>
                 </AlbumCardSection>

                 <AlbumCardSection>
                   <Image style = {imageStyle} source = {{uri: props.albumProps.image}}/>
                 </AlbumCardSection>    

                  <AlbumCardSection>
                       <AlbumButton onButtonPropsPress = {() => console.log ('Album tile ===',props.albumProps.title)}/>
                  </AlbumCardSection>

            </AlbumCard>
    );
};

const albumDetailsStyle = {
     // Flex box style explore it
    headerContentStyle : {
      flexDirection : 'column',
      justifyContent : 'space-around'

    },
    thumbnailStyle : {
      height : 50,
      width : 50
    },
    thumbnailContainerStyle : {
      justifyContent : 'center',
      alignItems : 'center',
      marginRight : 10,
      marginLeft : 10
    },
    imageStyle : {
      height : 200,
      flex : 1,
      width : null
    }
};

export default AlbumDetail;
