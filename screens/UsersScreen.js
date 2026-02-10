import React from "react";
import {Text, StyleSheet, View, FlatList} from "react-native";

class UsersScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }
    render() {
        const {users} = this.state;
        return (
            <View>
                <Text>Users Screen</Text>
                <FlatList 
                    keyExtractor={item => item.id.toString()}
                    data={users} 
                    renderItem = {({item}) => {
                        return (
                            <View>
                                <Text>{item.id}</Text>
                                <Text>{item.name}</Text>
                                <Text>{item.email}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        );
    }
    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const jsonData = await data.json();
        this.setState({
            users: jsonData.slice(0, 10)
        })
    }
}

const style = StyleSheet.create({})

export default UsersScreen;