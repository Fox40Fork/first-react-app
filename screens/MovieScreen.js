import React from "react";
import {Text, StyleSheet, View, FlatList} from "react-native";

const newMovies = [
    {name: "F1: The Movie", releaseYear: 2025}
]
const oldMovies = [
    {name: "Indiana Jones: Raiders of the Lost Ark", releaseYear: 1981},
    {name: "Karate Kid", releaseYear: 1984},
]

const ListMovies = () => {
    return <View>
        <Text>List of movies</Text>
        <FlatList
        data = {newMovies}
        renderItem={({item}) => {
            return <Text style = {style.newMovies}>{item.name} - {item.releaseYear}</Text>
        }}
         />
         <FlatList 
        data = {oldMovies}
        renderItem={({item}) => {
            return <Text style = {style.oldMovies}>{item.name} - {item.releaseYear}</Text>
        }}
         />    
    </View>
}

const style = StyleSheet.create({
    newMovies: {
        fontStyle: bold,
        color: black
    },
    oldMovies: {
        fontStyle: italic,
        color: brown
    }
})

export default ListMovies;