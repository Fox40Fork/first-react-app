import React from "react";
import {Text, StyleSheet, View, FlatList} from "react-native";

const colors = [
    {name: "Red"},
    {name: "Blue"},
    {name: "Green"},
    {name: "Papaya"},
]

const ColorScreen = () => {
    return <View>
        <Text>List of colors</Text>
        <FlatList
        data = {colors}
        renderItem={({item}) => {
            return <Text>{item.name}</Text>
        }}
         />
        <Button 
            title = "Go back to Menu"
            onClick = {() => props.navigation.navigate("Menu")}
        />    
    </View>
}

const style = StyleSheet.create({})

export default ColorScreen;