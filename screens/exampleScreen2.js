import React from "react";
import {Text, StyleSheet, View} from "react-native";

const ExampleScreen1 = () => {
    //stvaranje varijable koristeći let
    let message = "DR: Ola todos!"
    return (
        <View>
            <Text style = {[styles.yellowFont, styles.fontStyle]}>{message}</Text>
            <Text style = {[styles.blueFont, styles.fontStyle]}>MV: Hello everyone</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    yellowFont: {
        color: yellow
    },
    fontStyle: {
        fontSize: 20,
        fontStyle: italic
    },
    blueFont: {
        color: blue
    }
})
export default ExampleScreen2;