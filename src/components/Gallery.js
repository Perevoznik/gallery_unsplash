import React, { useEffect } from "react";
import ImageItem from "./ImageItem";
import { useDispatch, useSelector, connect } from "react-redux";
import { Button, ActivityIndicator, FlatList } from "react-native";
import { getImagesFromServer } from "../redux/actions";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Gallery = ({navigation}) => {

    const dispatch = useDispatch();
    const images = useSelector(state => state.imgReducer.images);
    const loading = useSelector(state => state.appReducer.loading);
  
    useEffect(() => dispatch(getImagesFromServer()), [dispatch]);

    if(loading){
        return (<ActivityIndicator size="large" color="#0000ff" />);
    }

    if(!images.length){
        return <Button title="Update" onPress={() => dispatch(getImagesFromServer())}/>
    }

    return (
        <FlatList data={images} renderItem={({item}) =>
            <TouchableWithoutFeedback onPress={() => {navigation.navigate('View photo', {imageUri: item.urls.raw})}}>
                <ImageItem image={item}/>
            </TouchableWithoutFeedback>
        } keyExtractor={img => img.id}/>
    );

}

export default Gallery;