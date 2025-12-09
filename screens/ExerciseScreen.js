import React from "react";
import {Text, StyleSheet, View} from "react-native";

//JSX - Next Gen JavaScript

const ExerciseScreen = () => {
    //stvaranje varijable koristeći let
    let message = "Hi there!"

    //dodjela nove vrijednosti

    message = "Hi there from DS!"
    return (
        <View>
            <Text>{message}</Text>
            <Text>Drugi text</Text>
        </View>
    )
};

export default ExerciseScreen;