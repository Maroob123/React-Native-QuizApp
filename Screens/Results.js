import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { Title } from '../Components';
// import Success from '../assets/success.png';
// import Failure from '../assets/bedgrades.png'
import Trophy from '../assets/trophy.png';
import Tick from '../assets/green-check.png';
import Cross from '../assets/red-cross.png';

const Results = ({ navigation, route }) => {
  const { score } = route.params

  // const resultBanner = score < 40 ? Success : Failure;
  const correctAnswer = score/10;
  const wrongAnswer = 10 - correctAnswer;
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image source={Trophy}
          style={styles.banner}
          resizeMode="cover"
        />
      </View>
      <Title titleText="Congratulations" theme="light" />
      <Text style={styles.scoreText1}>you have successfully completed</Text>
      <Text style={styles.scoreText1}>your quiz</Text>
      <View style={styles.summary}>
        <View style={styles.summaryItem}><Image source={Tick} style={styles.icon} resizeMode="contain" /><Text style={styles.summaryItemText}>   {correctAnswer} correct</Text></View>
        <View style={styles.summaryItem}><Image source={Cross} style={styles.icon} resizeMode="contain" /><Text style={styles.summaryItemText}>   {wrongAnswer} incorrect</Text></View>
      </View>
      <Text style={styles.scoreText}>Your Total Score: {score}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}
        style={styles.button}>
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  )
}


export default Results;

const styles = StyleSheet.create({
  banner: {
    height: 250,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
  },
  container: {
    paddingTop: 0,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "#955ee1",
    justifyContent: "space-around"
  },
  button: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#7f7f7f',
    letterSpacing: 2,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: '800',
    alignSelf: "center",
    color: "#fff",
    marginVertical: 20,
  },
  scoreText1: {
    fontSize: 18,
    fontWeight: '400',
    alignSelf: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
  },
  summary:{
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  summaryItem:{
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#a170e5",
    borderRadius: 10,
  },
  summaryItemText:{
    fontSize: 12,
    color:"#fff",
  },
  icon:{
    width: 12,
    height: 12,
    MarginRight: 10,
  }
})