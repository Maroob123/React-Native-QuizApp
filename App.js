import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';

const App = () => {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  )
}

export default App;

const Styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});

