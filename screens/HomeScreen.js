import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
    return <View>
        <Text>Welcome to Home screen</Text>
        <Button 
            title = "Go back to Menu"
            onPress = {() => props.navigation.navigate("Menu")}
        />
        <TouchableOpacity onPress = {() => props.navigation.navigate("Profile")}>
            <Text>Go to Profile screen</Text>
        </TouchableOpacity>
    </View>
}

export default HomeScreen;