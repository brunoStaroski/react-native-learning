import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT_VALUE = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                if (red + change > 255 || red + change < 0)
                    return;
                setRed(red + change);
                return;
            case 'blue':
                if (blue + change > 255 || blue + change < 0)
                    return;
                setBlue(blue + change);
                return;
            case 'green':
                if (green + change > 255 || green + change < 0)
                    return;
                setGreen(green + change);
                return;
        }
    }

    return <View>
        <Text>Square screen</Text>
        <ColorCounter
            color='red'
            onIncrease={() => setColor('red', COLOR_INCREMENT_VALUE)}
            onDecrease={() => setColor('red', -COLOR_INCREMENT_VALUE)}
        />
        <ColorCounter
            color='blue'
            onIncrease={() => setColor('blue', COLOR_INCREMENT_VALUE)}
            onDecrease={() => setColor('blue', -COLOR_INCREMENT_VALUE)}
        />
        <ColorCounter
            color='green'
            onIncrease={() => setColor('green', COLOR_INCREMENT_VALUE)}
            onDecrease={() => setColor('green', -COLOR_INCREMENT_VALUE)}
        />

        <View style={{width: 150, height: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />


    </View>
}

const styles = StyleSheet.create({

});

export default SquareScreen;