import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { Title } from '../Components';
import HomeBanner from '../assets/HomeBanner.png';

const Home = ({navigation}) => {
  return (
    <View>
      <Title />
      <View style={styles.bannerContainer}>
        <Image source={HomeBanner} 
        style={styles.banner}
        resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Quiz")}>
          <Text>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home ;

const styles = StyleSheet.create({
  banner:{
    height: 300,
    width: 300,
  },
  bannerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  }
})