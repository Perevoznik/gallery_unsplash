import React from "react";
import { Text, StyleSheet, Image, View, ImageBackgroundComponent, ImageBackground } from "react-native";

const ImageItem = ({image}) => {

    return (
        <View style={styles.imgContainer}>

            <ImageBackground style={{flex: 5}} source={{uri: image.urls.small}}>
                <View style={styles.namePanel}>
                    <Text>Author: {image.user.first_name}</Text>
                </View>
            </ImageBackground>

            <Text style={styles.descriptionText}>
                {image.alt_description || "No description"}
            </Text>
        </View>
        
    );
};

const styles = StyleSheet.create({
    imgContainer: {
        height: 250,
        width: null,
        margin: 2,
        padding: 2,
        backgroundColor: "#fff"
    },

    namePanel: {
        height: 25,
        backgroundColor: "#fff",
        opacity: 0.8
    },
    descriptionText: {

        flex: 1,
        margin: 15,
    }
});

export default ImageItem;