import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const BoxChallange = () =>{
    return (
        <View style = {{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "stretch",
            flexWrap: "wrap"
        }}>
            <View style = {{width: 50, height: 200, backgroundColor: "powderblue", margin: 50}}></View>
            <View style = {{width: 50, height: 200, backgroundColor: "skyblue", margin: 50}}></View>
            <View style = {{width: 50, height: 200, backgroundColor: "steelblue", margin: 50}}></View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default BoxChallange; 