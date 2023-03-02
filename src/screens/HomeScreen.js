import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";


const HomeScreen = (props) => {
    return (
      <View>
          <Button
              title="Component Screen"
              onPress={() => {
                  props.navigation.navigate('Components')
              }}
          />
          <View style={styles.margin}>
          <Button
              title="List Screen"
              onPress={() => {
                  props.navigation.navigate('List')
              }}
          />
          </View>
          <Button
              title="Image Screen"
              onPress={() => {
                  props.navigation.navigate('Image')
              }}
          />
          <View style={styles.margin}>
              <Button
                  title="Counter Screen"
                  onPress={() => {
                      props.navigation.navigate('Counter')
                  }}
              />
          </View>
          <View>
              <Button
                  title="Color Screen"
                  onPress={() => {
                      props.navigation.navigate('Color')
                  }}
              />
          </View>
          <View style={styles.margin}>
              <Button
                  title="Color Screen"
                  onPress={() => {
                      props.navigation.navigate('Square')
                  }}
              />
          </View>
      </View>



    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    margin: {
        marginVertical: 30
    }
});

export default HomeScreen;