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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Button" component = {ButtonScreen2}></Stack.Screen>
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