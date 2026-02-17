import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, ScrollView} from 'react-native'
import data from "../data/products.json"
import Product from "../components/Product"

export default class ProductsScreen extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.setState({
            products: data
        })
    }

  render() {
    return (
        <ScrollView>
            <View>
                <Text>Products of 2020</Text>
                <FlatList 
                    data = {this.state.products}
                    renderItem = {({item}) => 
                        <View>
                            <Product 
                                name = {item.name}
                                category = {item.category}
                                desc = {item.desc}
                                stock = {item.stock}
                                price = {item.price}
                                image = {item.image}
                            />
                        </View>
                    }
                />
            </View>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})
