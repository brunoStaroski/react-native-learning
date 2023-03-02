import React from "react";
import {View, Text, StyleSheet} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/images/forest_419496319_1000.jpg')}/>
            <ImageDetail title="Desert" imageSource={require('../../assets/images/Sand-dunes-Sahara-Morocco-Merzouga.webp')}/>
            <ImageDetail title="Beach" imageSource={require('../../assets/images/saud-beach-luzon-philippines-WRLDBEACH0421-15e2c368e7ad4495be803bd60cafa379.jpg')}/>
        </View>


    )
}

const style = StyleSheet.create({

})

export default ImageScreen;