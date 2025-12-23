import React from "react";
import {Text, StyleSheet, View, Button} from "react-native";

const MenuScreen = (props) => {
    return (
        <View>
            <Text style = {style.txtStyle}>Welcome to Main Menu</Text>
            <Button
                title = "Go to button screen"
                color = "purple"
                onClick = {() => props.navigation.navigate("Button")}
            />
            <Button
                title = "Go to color screen"
                color = "green"
                onClick = {() => props.navigation.navigate("Color")}
            />
            <Button
                title = "Go to fruit screen"
                color = "red"
                onClick = {() => props.navigation.navigate("Fruit")}
            />
            <Button
                title = "Go to Home screen"
                color = "blue"
                onClick = {() => props.navigation.navigate("Home")}
            />
        </View>
    )
};

const style = StyleSheet.create({
    txtStyle: {
        textAlign: "center",
        fontSize: 30
    }
})

export default MenuScreen;