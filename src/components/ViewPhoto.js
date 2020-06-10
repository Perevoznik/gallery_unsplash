import React from "react";
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

const ViewPhoto = ({route}) => {

    const {imageUri} = route.params;
    
    return (
        <Image style={{flex: 1}} source={{uri: imageUri}} 
        indicator={ProgressBar}/>
    );
};

export default ViewPhoto;