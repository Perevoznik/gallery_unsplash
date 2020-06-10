import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from "react-native";

const Header = () => {

    return (
        <ImageBackground 
        accessibilityRole="image"
        source={require('../img/header-background-2.jpg')}
        style={styles.header}>
            
            <Text style={styles.text}>Unsplash</Text>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({

    header: {
        paddingVertical: 10,
        paddingHorizontal: 30,
    },

    text: {
        fontSize: 40,
        fontWeight: '600',
        textAlign: 'center',
        color: "#ffff"
    }
});

export default Header;