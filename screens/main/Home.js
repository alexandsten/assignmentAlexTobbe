import React, {useContext} from 'react'
import {Text, View, Button, StyleSheet, FlatList} from 'react-native'
import { StartContext } from '../../contexts/StartContext'

export const Home = () => {
  const {handleLogout} = useContext(StartContext)
  return (
    <View style={styles.container}>
      <Text>Main - home</Text>
      <Button title="Test login function" onPress={() => handleLogout()} />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:300,
      backgroundColor: 'pink'
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
    },input: {
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      marginVertical: 10,
  },
  });