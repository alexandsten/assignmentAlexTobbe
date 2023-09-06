import React, {useContext} from 'react'
import {View} from 'react-native'

import { StartContext } from '../contexts/StartContext';
import MainNav from './MainNav';
import LoginNav from './LoginNav';
import DrawerNav from './DrawerNav';


export const RootNav = () => {
  const {accessToken, userID} = useContext(StartContext);

  return (
    <>
    
      {
        accessToken !== null
          ? <MainNav />
          : <LoginNav />
      }
    </>
  )
}