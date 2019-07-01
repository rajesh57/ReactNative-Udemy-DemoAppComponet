/* eslint-disable react/prop-types */

import React from 'react';
import {
    Text,
    TouchableOpacity

} from 'react-native';

const AlbumButton = (onButtonPropsPress) => {

// Code Refactring 
const {buttonStyle,textStyle} = AlbumButtonStyle

    return (
             <TouchableOpacity  onButtonPress = {onButtonPropsPress} style = {buttonStyle}>
              <Text style = {textStyle}> Click Me</Text>
            </TouchableOpacity>
    );

}

const AlbumButtonStyle = {

    buttonStyle : {
        flex : 1,
        alignSelf : 'stretch',
        backgroundColor : '#fff',
        borderRadius : 5,
        borderWidth :1 ,
        borderColor : '#007aff',
        marginLeft : 5,
        marginRight :5
    },
    textStyle : {
        alignSelf: 'center',
        color : '#0072ff',
        fontSize : 16,
        fontWeight :'300',

    }

}

export default AlbumButton;

