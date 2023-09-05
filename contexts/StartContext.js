import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';

export const StartContext = createContext()


export const StartProvider = ({children}) => {
  const [accessToken, setAccessToken] = useState(null);
  const [userID, setUserId] = useState('');
  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState('');
  const [message, setMessage] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [picture, setPicture] = useState(null);
  
  const handleLogin = async () => {   // funktion som hämtar och bearbetar API'et
    
    try {
      console.log(userName)
      
      const response = await fetch(`https://chat-api-with-auth.up.railway.app/auth/token`, {

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
      setMessage('') &
      setUserId(loginAPI.data._id)&
      await AsyncStorage.setItem('userID', loginAPI.data.accessToken) &
      setAccessToken(loginAPI.data.accessToken)&
      await AsyncStorage.setItem('accessToken', loginAPI.data.accessToken)
      :
      setMessage(loginAPI.message)

      loginAPI.data.username ? 
      setFirstName(loginAPI.data.username) & setLastName(loginAPI.data.lastname) :
      console.log("namn finns ej")

    } catch(error) {
      console.log(error)
    }
  }

  const handleLogout = async () => {
    console.log('handleLogout')

    try {
      await AsyncStorage.removeItem('accessToken')
      setAccessToken(null)
    } catch(error) {
      console.log(error)
    }
  }

  const isLoggedIn = async () => {
    console.log('isLoggedIn')
    try {
      const token = await AsyncStorage.getItem('accessToken')
      setAccessToken(token)
      
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [])
  
  const handleUpdateUsername = async (newUserName, newLastName) => {
    console.log("New Username:", newUserName);
    try {
      const response = await fetch(`https://chat-api-with-auth.up.railway.app/users/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          "firstname": newUserName,
          "lastname": newLastName,
           "image": "some-image"
        }) 
      });
      if (response.status === 200) {
        console.log("du har uppdaterat ditt namn")
        setFirstName(newUserName)
        setLastName(newLastName)
      } else {
        console.log("Error updating username");
      }

    } catch (error) {
      console.log(error);
    }
  };


  return (
    
    <StartContext.Provider value={{accessToken, setAccessToken, handleLogin, handleLogout, userName, setUserName, userPassword, setUserPassword, message, userID, handleUpdateUsername, firstName, lastName, picture, setPicture}}>
      {children}
    </StartContext.Provider>
  )
  
}