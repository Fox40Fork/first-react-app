import React from "react";
import {Text, StyleSheet, View, FlatList} from "react-native";

class PostsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }
    render() {
        const {posts} = this.state;
        return (
            <View>
                <Text>Posts Screen</Text>
                <FlatList 
                    keyExtractor={item => item.id.toString()}
                    data={posts} 
                    renderItem = {({item}) => {
                        return (
                            <View>
                                <Text>{item.id}</Text>
                                <Text>{item.title}</Text>
                                <Text>{item.body}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        );
    }
    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts")
        const jsonData = await data.json();
        this.setState({
            posts: jsonData.slice(0, 10)
        })
    }
}

const style = StyleSheet.create({})

export default PostsScreen;