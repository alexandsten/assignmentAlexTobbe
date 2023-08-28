import React, {useContext, useState} from 'react'
import {Text, View, Button, TouchableOpacity, TextInput, StyleSheet, useEffect} from 'react-native'
import { StartContext} from '../../contexts/StartContext';


export const Login = ({navigation}) => {
  const { handleLogin, userName, setUserName, userPassword, setUserPassword, message } = useContext(StartContext);
  const [textInputValue, setTextInputValue] = useState(''); // Local state for the input value
  

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <TextInput
        value={userName} // Use local state value for TextInput
        style={styles.input}
        placeholder='batman'
        onChangeText={(value) => setUserName(value)} // Update local state value
      />
      <TextInput
        value={userPassword} // Use local state value for TextInput
        style={styles.input}
        placeholder='batman'
        onChangeText={(value) => setUserPassword(value)} // Update local state value
      />
      <Text>Login</Text>
      <Button title="Login" onPress={() => {
     /*   setUserName(textInputValue); // Update context state with the local state value */
        handleLogin();
      }} />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    
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