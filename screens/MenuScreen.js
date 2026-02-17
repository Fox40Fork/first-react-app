import React from "react";
import {Text, StyleSheet, View, Button} from "react-native";

const MenuScreen = (props) => {
    return (
        <View>
            <Text style = {style.txtStyle}>Welcome to Main Menu</Text>
            <Button
                title = "Go to button screen"
                color = "purple"
                onPress = {() => props.navigation.navigate("Button")}
            />
            <Button
                title = "Go to color screen"
                color = "green"
                onPress = {() => props.navigation.navigate("Color")}
            />
            <Button
                title = "Go to fruit screen"
                color = "red"
                onPress = {() => props.navigation.navigate("Fruit")}
            />
            <Button
                title = "Go to Home screen"
                color = "blue"
                onPress = {() => props.navigation.navigate("Home")}
            />
            <Button
                title = "Go to Students screen"
                color = "blue"
                onPress = {() => props.navigation.navigate("Students")}
            />
            <Button
                title = "Go to Box screen"
                color = "blue"
                onPress = {() => props.navigation.navigate("Box")}
            />
            <Button
                title = "Go to API Challange screen"
                color = "blue"
                onPress = {() => props.navigation.navigate("APIChallangeScreen")}
            />
            <Button
                title = "Go to Countries screen"
                color = "blue"
                onPress = {() => props.navigation.navigate("CountriesScreen")}
            />
            <Button
                title = "Go to Products screen"
                color = "blue"
                onPress = {() => props.navigation.navigate("ProductsScreen")}
            />
        </View>
    )
};

const style = StyleSheet.create({
    txtStyle: {
        textAlign: "center",
        fontSize: 30
    },
})

export default MenuScreen;