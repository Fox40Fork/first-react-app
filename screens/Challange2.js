import React from "react";
import {Text, StyleSheet, View} from "react-native";
import { FlatList } from "react-native-web";

const Hobbies = [
    {hobby: "Mountain Biking", difficulty: "Medium"},
    {hobby: "Programming", difficulty: "Medium"},
    {hobby: "Running", difficulty: "Hard"}
]
const Challange2Screen = () => {
    return (
        <View>
            <Text>List of my hobbies :P</Text>
            <FlatList 
            data = {Hobbies}
            renderItem={({item}) => {
                return <Text>Hobby: {item.hobby} - Difficulty: {item.difficulty}</Text>
            }}
            />
        </View>
    )
};

export default Challange2Screen;