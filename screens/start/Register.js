import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

console.log('Register')

export const Register = () => {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: '#999',
      borderStyle: 'dashed',
      padding: 10,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#b8bff7',
    justifyContent: 'space-between',
    width: 60,
    height: 40
  }, logo: {
    width: 150, // Set the desired width for the image
    height: 150, // Set the desired height for the image
  },
});