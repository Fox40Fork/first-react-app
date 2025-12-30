import React from "react";
import {Text, StyleSheet, View, props, Image, TouchableOpacity} from "react-native";

const StudentDetails = (props) => {
    let isFavorite = false;

    return <TouchableOpacity onClick = {alert("This student has been clicked")}>
            <View style = {styles.container}>
                <View style = {styles.cardWrapper}>
                    <View style = {styles.imageWrapper}>
                        <Image source = {props.image} style = {styles.img}/>
                    </View>
                <View style = {styles.infoWrapper}>
                    <Text style = {styles.name}>{props.name}</Text>
                    <Text>{props.description}</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    isFavorite = true;
                }}>
                    <Image source = "../assets/heart.png" style = {isFavorite ? styles.heartImgClicked : styles.heartImg}/>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20
    },
    cardWrapper: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 8,
        width: "90%",
        alignSelf: "center",
        marginBottom: 15
    },
    img: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    heartImg: {
        width: 20,
        height: 20,
        color: "white"
    },
    heartImgClicked: {
        width: 20,
        height: 20,
        color: "white"
    },
    infoWrapper: {
        margin: 20
    },
    name: {
        fontWeight: "bold"
    }
})

export default StudentDetails;