import React from "react";
import {Text, StyleSheet, View, FlatList} from "react-native";

const colors = [
    {name: "Red"},
    {name: "Blue"},
    {name: "Green"},
    {name: "Papaya"},
]

const ListColors = () => {
    return <View>
        <Text>List of colors</Text>
        <FlatList
        data = {colors}
        renderItem={({item}) => {
            return <Text>{item.name}</Text>
        }}
         />    
    </View>
}

const style = StyleSheet.create({})

export default ListColors;