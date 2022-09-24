import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { Title } from '../Components';
import Success from '../assets/success.png';
import Failure from '../assets/bedgrades.png'

const Results = ({navigation, route}) => {
  const {score} = route.params

  const resultBanner = score > 40 ? Success : Failure;
  return (
    <View style={styles.container}>
      <Title titleText="RESULTS" />
      <Text style={styles.scoreText}>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image source={resultBanner} 
        style={styles.banner} 
        resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Home")}
      style={styles.button}>
          <Text style={styles.buttonText}>Go To Home</Text>
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
    flex: 1,
  },
  container:{
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  button:{
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText:{
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  scoreText:{
    fontSize: 24,
    fontWeight: '800',
    alignSelf: "center",
    color: "#00000"
  }  
})