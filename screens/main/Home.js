import React, {useContext} from 'react'
import {Text, View, Button} from 'react-native'
import { StartContext } from '../../contexts/StartContext'

export const Home = () => {
  const {handleLogout} = useContext(StartContext)
  return (
    <View style={{flex: 1}}>
      <Text>Main - home</Text>
      <Button title="Test login function" onPress={() => handleLogout()} />
    </View>
  )
}