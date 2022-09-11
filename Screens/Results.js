import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { Title } from '../Components';
import HomeBanner from '../assets/HomeBanner.png';

const Results = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image source={HomeBanner} 
        style={styles.banner}
        resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <Text>Home</Text>
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
  },
  container:{
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
})