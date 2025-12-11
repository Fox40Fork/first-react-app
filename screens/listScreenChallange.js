import React from "react";
import {Text, StyleSheet, View, FlatList} from "react-native";

const students = [
    {name: "Fernando", surname: "Alonso", age: 43},
    {name: "Carlos", surname: "Sainz", age: 31},
    {name: "Charles", surname: "Leclerc", age: 28},
    {name: "Max", surname: "Verstappen", age: 28},
]

const ListScreenChallange = () => {
    return <View>
        <Text>List of students</Text>
        <FlatList
        data = {students}
        renderItem={({item}) => {
            return <Text>{item.name} {item.surname} - {item.age}</Text>
        }}
         />    
    </View>
}

const style = StyleSheet.create({})

export default ListScreenChallange;