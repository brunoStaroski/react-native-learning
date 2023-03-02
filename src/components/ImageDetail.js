import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";

const ImageDetail = (props) => {
    return (
        <View>
            <Image style={style.imageSize} source={props.imageSource}></Image>
            <Text>{props.title}</Text>

        </View>


    )
};

const style = StyleSheet.create({
    imageSize: {
        width: 200,
        height: 200
    }
});

export default ImageDetail;