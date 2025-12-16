import React from "react";
import {Text, StyleSheet, View} from "react-native";

const ExampleScreen = () =>{
    return (
    <View style = {styles.container}>
        <Text style = {styles.textStyle}>Williams F1 Team FW-48</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1.4,
        backgroundColor: "#00008B",
        alignItems: "start",
        justifyContent: "center"
    },
    textStyle : {
        fontSize : 25,
        color: "white"
    },
});

export default ExampleScreen;