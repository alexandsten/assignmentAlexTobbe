import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';

export const StartContext = createContext()


export const StartProvider = ({children}) => {
  const [accessToken, setAccessToken] = useState('fel');
  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState('');
  
  
  const handleLogin = async () => {   // funktion som hämtar och bearbetar API'et
    
    try {
      console.log(userName)
      
      const response = await fetch(`https://chat-api-with-auth.up.railway.app/auth/token`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({
        'username': userName,
          'password': '123'
      })
      }
      
      
      
      );
      const loginAPI = await response.json();
     

      /*
      movieAPI.Search ?       // ternary operator som undersöker API'ets svar
       
      setMovieResponse(movieAPI.Search)
      :
      setMovieError(movieAPI.Error)  // felaktiga svar hämtar Error meddelande
      */

      console.log(loginAPI.message)
      setAccessToken(loginAPI.accessToken)
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

  return (
    
    <StartContext.Provider value={{accessToken, setAccessToken, handleLogin, handleLogout, userName, setUserName, userPassword, setUserPassword}}>
      {children}
    </StartContext.Provider>
  )

}