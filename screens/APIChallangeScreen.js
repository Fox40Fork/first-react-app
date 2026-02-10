import React from "react";
import {Text, StyleSheet, View, FlatList} from "react-native";

class APIChallangeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [], //Ola todos! - DR3
        } //hello everyone! - MV33
    }
    render() {
        const {todos} = this.state;
        return (
            <View style = {{backgroundColor: "lightgray", flex: 1}}>
                <Text style = {style.titleText}>ToDos Screen</Text>
                <Text style = {style.subtitleText}>To-dos: {todos.length}</Text>
                <Text style = {style.subSubtitleText}>As DR3 once said: "Ola todos!"</Text>

                <FlatList 
                    keyExtractor={item => item.id.toString()}
                    data={todos} 
                    renderItem = {({item}) => {
                        return (
                            <View style = {style.viewStyle}>
                                <Text>{item.id}</Text>
                                <Text>{item.title}</Text>
                                <Text>{item.completed ? "Completed" : "Not Completed"}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos")
        const jsonData = await data.json();
        this.setState({
            todos: jsonData
        })
    }
}

const style = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Arial",
    },
    subtitleText: {
        fontSize: 16,
        fontWeight: "italic",
        fontFamily: "Arial"
    },
    subSubtitleText: {
        fontSize: 9,
        fontWeight: "normal",
        fontFamily: "Arial"
    },
    viewStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        padding: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "powderblue"
    }
})

export default APIChallangeScreen;