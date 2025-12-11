import React from "react";
import {Text, StyleSheet, View, FlatList} from "react-native";

const students = [
    {name: "Fernando", surname: "Alonso", age: 43},
    {name: "Fernando 2", surname: "Alonso 2", age: 43},
    {name: "Fernando 3", surname: "Alonso 3", age: 43},
    {name: "Fernando 4", surname: "Alonso 4", age: 43},
]

const ListScreen = () => {
    return <View>
        <Text>List of students</Text>
        <FlatList
        horizontal = {true}
        keyExtractor={(student) => student.name}
        data = {students}
        renderItem={({item}) => {
            return <Text>{item.name} {item.surname} - {item.age}</Text>
        }}
         />    
    </View>
}

const style = StyleSheet.create({})

export default ListScreen;