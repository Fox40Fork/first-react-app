import React from "react";
import {Text, StyleSheet, View} from "react-native";

const FactScreen = () => {
    //stvaranje varijable koristeći let
    const fact1 = "1: Max is better than Lando"
    let fact2 = "2: Fernando is still good"
    const fact3 = "3: Oscar should've won the 2025 WDC"
    return (
        <View>
            <Text style = {factOne}>{fact1}</Text>
            <Text style = {factTwo}>{fact2}</Text>
            <Text style = {factThree}>{fact3}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    factOne: {
        color: "blue",
        fontStyle: "bold"
    },
    factTwo: {
        fontSize: 10,
        fontStyle: "italic"
    },
    factThree: {
        color: "orange"
    }
})
export default FactScreen;