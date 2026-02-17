import React from "react";
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Image} from "react-native";

const Product = (props) => {
    <View style={styles.cardContainer}>
        <Image source = {{uri: props.image}} style={styles.img}/>¸
        <View style = {styles.cardDescription}>
            <Text>{props.name}</Text>
            <Text>{props.desc}</Text>
        </View>
        <View style = {styles.footer}>
            <Text>Stock: {props.stock}</Text>
            <Text>Price: ${props.price}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "white",
        marginBottom: 10,
        borderRadius: 10
    },
    img: {
        width: 250,
        height: 180,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    cardDescription: {
        paddingTop: 10,
        paddingHorizontal: 20,
        justifyContent: "space-between"
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})