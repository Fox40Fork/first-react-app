import React from "react";
import {Text, StyleSheet, View} from "react-native";

const Challange1Screen = () => {
    const name = "Marin Perić";
    const birthDate = "3.5.2011.";
    let age = 14;
    let grade = "9th";
    let favoriteSport = "Formula 1";
    const favoriteDriver = "Carlos Sainz Jr.";

    return (
        <View>
            <Text>Name: {name}</Text>
            <Text>Birth date: {birthDate}</Text>
            <Text>Age: {age}</Text>
            <Text>Grade: {grade}</Text>
            <Text>Favorite sport: {favoriteSport}</Text>
            <Text>Favorite driver: {favoriteDriver}</Text>
        </View>
    )
};

export default Challange1Screen;