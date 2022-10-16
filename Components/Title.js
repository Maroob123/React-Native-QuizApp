import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({titleText, theme}) => {
  return (
    <View style={styles.container}>
      <Text style={theme==="light"? styles.title2 : styles.title}>{titleText}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  title:{
    fontSize: 32,
    fontWeight: "600",
    color: '#7f7f7f',
    letterSpacing: 3,
    marginTop: -30,
  },
  title2:{
    fontSize: 36,
    fontWeight: "600",
    color: '#fff',
  },
  container:{
    // paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }
})