import React, {useContext} from 'react'
import {Text, View, Button, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import { StartContext} from '../../contexts/StartContext';
console.log('Login')

export const Login = () => {
  const {handleLogin} = useContext(StartContext);
  const {accesToken} = useContext(StartContext);
  const {userLogin} = useContext(StartContext);
  
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <TouchableOpacity onPress={() => handleLogin()}>
      <TextInput value={userLogin} />
      <Text>Login</Text>
      <Button title="Test login function"  />

      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create ({
  
})