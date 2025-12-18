import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const ButtonScreen2 = () =>{
    let fernandoFasterCounter = 0;
    return (
    <View>
        <Text style = {style.textStyle}>Button Challange Screen</Text>
        <TouchableOpacity style = {style.toStyle} onPress = {() => console.log("Fernando is faster than you: ", fernandoFasterCounter++ + "km/h")}>
            <Text>Fernando is faster by how much you click this touchable opacity</Text>
        </TouchableOpacity> 
    </View>
    );
};

const style = StyleSheet.create({
    toStyle: {
        backgroundColor: "red",
        borderRadius: 10,
        margin: 20
    }
});
export default ButtonScreen2;