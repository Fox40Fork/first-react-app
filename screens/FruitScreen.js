import React from "react";
import {Text, StyleSheet, View} from "react-native";

const FruitScreen = () => {
    //stvaranje varijable koristeći let
    let fruit1 = "Apple"
    const fruit2 = "Banana"
    return (
        <View>
            <Text>{fruit1}</Text>
            <Text>{fruit2}</Text>
        </View>
    )
};

export default FruitScreen;