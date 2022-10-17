import React, { useEffect } from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';
import SplashScreen from 'react-native-splash-screen';
import SystemNavigationBar from 'react-native-system-navigation-bar';


const App = () => {
  SystemNavigationBar.immersive();
  useEffect(() => {
    SplashScreen.hide();
  }, [])
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

