import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { Title } from '../Components';
import HomeBanner from '../assets/HomeBanner.png';

const Results = ({navigation}) => {
  return (
    <View>
      <Title />
      <View style={styles.bannerContainer}>
        <Image source={HomeBanner} 
        style={styles.banner}
        resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <Text>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Results ;

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