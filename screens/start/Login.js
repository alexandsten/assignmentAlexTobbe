import React, {useContext} from 'react'
import {Text, View, Button} from 'react-native'
import { StartContext} from '../../contexts/StartContext';
console.log('Login')

export const Login = () => {
  const {handleLogin} = useContext(StartContext);

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>Login</Text>
      <Button title="Test login function" onPress={() => handleLogin()} />
    </View>
  )
}