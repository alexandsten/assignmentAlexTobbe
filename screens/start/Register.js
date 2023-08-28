import React, {useContext, useState} from 'react'
import {Text, View, StyleSheet, Button, TextInput} from 'react-native'
import { StartContext} from '../../contexts/StartContext';


export const Register = ({navigation}) => {
  const { userName, setUserName, userPassword, setUserPassword, setAccessToken } = useContext(StartContext);
  const [textInputValue, setTextInputValue] = useState(''); // Local state for the input value
  const [message, setMessage] = useState('');
  const [registerCheck, setRegisterCheck] = useState(null);

  const handleRegister = async () => {   // funktion som hämtar och bearbetar API'et
    
    try {
      console.log(userName)
      
      const response = await fetch(`https://chat-api-with-auth.up.railway.app/auth/register`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({
        'username': userName,
          'password': userPassword
      })
      }
      );
      const loginAPI = await response.json();

      console.log(loginAPI.message)
      loginAPI.status == '200' ? 
      setRegisterCheck('yes')
      :
      console.log('wrong!')
      setMessage(loginAPI.message)
    } catch(error) {
      console.log(error)
    }
    registerCheck !== null ?
        navigation.navigate('Login') : console.log('register not registered')
  }


  return (
    <View  style={styles.container}>
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
      <Button title="Register" onPress={() => {
     /*   setUserName(textInputValue); // Update context state with the local state value */
        handleRegister();

        registerCheck !== null ?
        navigation.navigate('Login') :
        console.log('hello world')
      }} />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
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
}
});