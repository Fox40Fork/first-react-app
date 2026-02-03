import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const BoxScreen = () =>{
    return (
        <View style = {{flex: 1,
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            <View style = {{width: 50, height: 50, backgroundColor: "powderblue"}}></View>
            <View style = {{width: 50, height: 50, backgroundColor: "skyblue"}}></View>
            <View style = {{width: 50, height: 50, backgroundColor: "powderblue"}}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    ViewStyle: {
        borderWidth: 3,
        borderColor: "black"
    },
    textStyle: {
        borderWidth: 1,
        borderColor: "red",
        margin: 20
    }
});

export default BoxScreen; 