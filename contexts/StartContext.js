import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';

export const StartContext = createContext()


export const StartProvider = ({children}) => {
  const [accessToken, setAccessToken] = useState('fel');
  console.log(accessToken)
  
  const handleLogin = async () => {
    console.log('handleLogin')

    try {
      // fetch accessToken...
     

      
      console.log(accessToken)
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
    
    <StartContext.Provider value={{accessToken, setAccessToken, handleLogin, handleLogout}}>
      {children}
    </StartContext.Provider>
  )

}