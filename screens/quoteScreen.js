import React from "react";
import {Text, StyleSheet, View} from "react-native";

const ExampleScreen1 = () => {
    let quote = "Stay hungry, stay foolish";
    const author = "-Steve Jobs";

    return (
        <View>
            <Text>{quote}</Text>
            <Text>{author}</Text>
        </View>
    )
};

export default QuoteScreen;