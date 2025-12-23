import React from "react";
import {Text, StyleSheet, View, FlatList} from "react-native";

const ProfileScreen = (props) => {
    return <View>
        <Text>Welcome to Profile screen</Text>
        <TouchableOpacity onClick = {() => props.navigation.navigate("Home")}>
            <Text>Go back to Home screen</Text>
        </TouchableOpacity>
    </View>
}

const style = StyleSheet.create({})

export default ProfileScreen;