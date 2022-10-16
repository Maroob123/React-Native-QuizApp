import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { Title } from '../Components';
import HomeBanner from '../assets/cute-purple-wise-owl-bird.png';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image source={HomeBanner} 
        style={styles.banner} 
        resizeMode="contain"
        />
      <Title titleText="QUIZZLER" />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Quiz")}
      style={styles.button}>
          <Text style={styles.buttonText}>Play Now</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home ;

const styles = StyleSheet.create({
  banner:{
    height: 200,
    width: 200,
  },
  bannerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container:{
    paddingTop: 10,
    paddingHorizontal: 20,
    height: "100%",
    justifyContent: "space-around"
  },
  button:{
    width: '100%',
    backgroundColor: '#955ee1',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText:{
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 2,
  },  
})