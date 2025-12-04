import React from "react";
import {Text, StyleSheet, View} from "react-native";

const MainScreen = () =>{
    return (
        //Single line comment
    <View style = {styles.container}>
        <Text style = {styles.textStyle}>This is the main screen</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "fff",
        alignItems: "center",
        justifyContent: "center"
    },
    textStyle : {
        fontSize : 30
    },
});

export default MainScreen;