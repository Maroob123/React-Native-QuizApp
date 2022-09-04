import { createStackNavigator } from '@react-navigation/stack';
import {Home, Quiz, Results} from '../Screens';
import React from 'react';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown: false}} />
      <Stack.Screen name="Result" component={Results} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}