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
      
      
      backgroundColor: 'pink'
    },
    
  });