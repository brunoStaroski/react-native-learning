import React from 'react';
import {Text, StyleSheet, View} from "react-native";

const ComponentScreen = () => {
    const greeting = 'Hi, there!'

    return (
        <View>
            <Text style={styles.textStyle}>this is the component screen</Text>
            <Text>{greeting}</Text>
        </View>
    );




};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 10
    }
})

export default ComponentScreen;

