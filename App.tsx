import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Frontimage from './Components/Frontimage'
import Passwordgen from './Components/Passwordgen'

export type RootStackParamList = 
{
  Frontimage:undefined;
  Passwordgen:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Frontimage">
        <Stack.Screen name="Frontimage" component={Frontimage} />
        <Stack.Screen name="Passwordgen" component={Passwordgen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})