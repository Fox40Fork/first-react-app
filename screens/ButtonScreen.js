import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const ButtonScreen = () =>{
    let counter = 0;
    return (
    <View>
        <Text style = {style.textStyle}>Button Screen</Text>
        <Button 
            title = "Click me"
            color = "purple"
            onPress = {() => console.log("Counter: ", counter++)}
        />
        <TouchableOpacity style = {style.buttonStyle} onPress = {() => console.log("Touchable opacity clicked: ", counter++)}>
            <Text style = {style.buttonStyle}>Touchable opacity :O</Text>
        </TouchableOpacity> 
    </View>
    );
};

const style = StyleSheet.create({
    textStyle: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 16,
        marginBottom: 10
    },
    buttonStyle: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 16,
        marginBottom: 10
    }
});
export default ButtonScreen;