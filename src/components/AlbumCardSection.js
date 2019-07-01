/* eslint-disable react/prop-types */


import React from 'react';
import {View} from 'react-native';

const AlbumCardSection = (props) => {

    return (
        <View style = {cardSectionStyle.containerStyle}> 
           {props.children}
        </View>
    );

};

const cardSectionStyle = {

    containerStyle : {
        borderBottomWidth : 1,
        padding : 5,
        backgroundColor :'gray',
        justifyContent :'flex-start',
        flexDirection : 'row',
        borderColor :'blue',
        position :'relative',

    }

};

export default AlbumCardSection;

