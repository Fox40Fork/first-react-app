import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import exampleScreen from './screens/exampleScreen';
//import ExampleScreen2 from './screens/exampleScreen2';
//import ListScreen from './screens/ListScreen';
import Challange2Screen from './screens/Challange2';
import ButtonScreen from './screens/ButtonScreen';
import ButtonScreen2 from './screens/ChallangeButtonScreen';
import MenuScreen from './screens/MenuScreen';
import ColorScreen from './screens/ColorScreen';
import FruitScreen from './screens/FruitScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import StudentsScreen from './screens/StudentsScreen';
import BoxScreen from './screens/BoxScreen';
import BoxChallange from './screens/BoxChallange';
import APIChallangeScreen from './screens/APIChallangeScreen';
import CountriesScreen from './screens/CountriesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name = "Main" component = {MenuScreen}></Stack.Screen>
        <Stack.Screen name = "Button" component = {ButtonScreen2}></Stack.Screen>
        <Stack.Screen name = "Color" component = {ColorScreen}></Stack.Screen>
        <Stack.Screen name = "Fruit" component = {FruitScreen}></Stack.Screen>
        <Stack.Screen name = "Home" component = {HomeScreen}></Stack.Screen>
        <Stack.Screen name = "Profile" component = {ProfileScreen}></Stack.Screen>
        <Stack.Screen name = "Students" component = {StudentsScreen}></Stack.Screen>
        <Stack.Screen name = "Box" component = {BoxScreen}></Stack.Screen>
        <Stack.Screen name = "BoxChallange" component = {BoxChallange}></Stack.Screen>
        <Stack.Screen name = "APIChallangeScreen" component = {APIChallangeScreen}></Stack.Screen>
        <Stack.Screen name = "CountriesScreen" component = {CountriesScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});