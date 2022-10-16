import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isloading, setIsloading] = useState(false);
  const [selected, setSelected] = useState("");
  const getQuiz = async () => {
    setIsloading(true)
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]))
    setIsloading(false)
  }
  useEffect(() => {
    getQuiz();
  }, [])

  const handleNextPress = () => {
    if (selected === ""){
      alert("Please Choose a option")
      return
    }
    if (selected === questions[ques].correct_answer) {
      setScore(score + 10)
    }
    if (ques !== 9) {
      setQues(ques + 1)
      setOptions(generateOptionsAndShuffle(questions[ques + 1]))
    }
    if (ques === 9) {
      handleShowResult()
    }
    setSelected("")
  }

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers]
    options.push(_question.correct_answer)

    shuffleArray(options)

    return options
  }

  const handleShowResult = () => {
    navigation.navigate("Result", {
      score: score
    })
  }
  return (
    <View style={styles.container}>
      {isloading ? <View style={styles.bannerContainer}>
        <ActivityIndicator size="large" color="#955ee1" />
      </View> : questions &&
      <View style={styles.parent}>
        <View style={styles.topParent}>
          <View style={styles.topChild}>
            <Text style={styles.question}>{decodeURIComponent(questions[ques].question)}</Text>
          </View>
        </View>
        <View style={styles.options}>
          <TouchableOpacity style={selected=== options[0] ? styles.optionButton2: styles.optionButton} onPress={() => setSelected(options[0])}>
            <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selected=== options[1] ? styles.optionButton2: styles.optionButton} onPress={() => setSelected(options[1])}>
            <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selected=== options[2] ? styles.optionButton2: styles.optionButton} onPress={() => setSelected(options[2])}>
            <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selected=== options[3] ? styles.optionButton2: styles.optionButton} onPress={() => setSelected(options[3])}>
            <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.button} onPress={handleNextPress}>
              <Text style={styles.buttonText}>{ques !== 9 ? "Next" : "SHOW RESULTS"}</Text>
            </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>END</Text>
            </TouchableOpacity> */}
        </View>
      </View>
      }
    </View>
  )
}

export default Quiz;

const styles = StyleSheet.create({
  bottom: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#955ee1',
    padding: 16,
    paddingHorizontal: 16,
    // borderRadius: 16,
    alignSelf: "stretch",
    alignItems: 'center',
    width: "100%",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    height: "100%",
  },
  options: {
    marginVertical: 16,
    flex: 1,
    paddingHorizontal: 20,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    // color: 'white',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    // backgroundColor: '#34A0A4',
    paddingHorizontal: 12,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "#E0E0E0",
  },
  optionButton2: {
    paddingVertical: 12,
    marginVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "#955ee1",
  },
  parent: {
    height: '100%',
  },
  question: {
    fontSize: 22,
    textAlign: "center",
    color: "white",
    paddingHorizontal: 20,
  },
  topParent: {
    height: '30%',
    width: '100%',
    transform: [{ scaleX: 2 }],
    borderBottomStartRadius: 500,
    borderBottomEndRadius: 500,
    overflow: 'hidden',
  },
  topChild: {
    flex: 1,
    transform: [{ scaleX: 0.5 }],

    backgroundColor: '#955ee1',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
  },
})