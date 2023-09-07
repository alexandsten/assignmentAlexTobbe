import React, {useContext} from 'react'
import { StartContext } from '../contexts/StartContext';
import MainNav from './MainNav';
import LoginNav from './LoginNav';

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