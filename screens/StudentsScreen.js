import React from "react";
import {Text, StyleSheet, View} from "react-native";
import StudentDetails from "../components/studentDetails";

const StudentsScreen = () => {
    return <View>
        <Text>Students Screen</Text>
        <StudentDetails name = "Fernando" image = {require("../assets/nando.jpg")} description = "forehead pic"/>
        <StudentDetails name = "Kimi" image = {require("../assets/kimi.jpg")} description = "kimi"/>
        <StudentDetails name = "Carlos" image = {require("../assets/kimi.jpg")} description = "carlos"/>
    </View>
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20
    }
})

export default StudentsScreen;