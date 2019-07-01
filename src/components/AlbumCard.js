/* eslint-disable react/prop-types */

import React from 'react';
import {
    View
} from 'react-native';

const AlbumCard = (props) => {
    return (
        <View style = {cardStyles.containerStyle}> 
          {props.children}
        </View>
    );
};

const cardStyles = {

    containerStyle : {
        borderWidth :1,
        borderRadius : 2,
        borderColor : 'gray',
        borderBottomWidth :0,
        shadowColor :'green',
        shadowOffset : {width:0 , height:2},
        shadowOpacity :0.1,
        shaoowRadius :2,
        elevation :1,
        marginLeft :5,
        marginRight : 5,
        marginTop :5

    }

};

export default AlbumCard;

