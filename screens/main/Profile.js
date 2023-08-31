import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native'
import { StartContext } from '../../contexts/StartContext'

export const Profile = () => {
  const { handleLogout, accessToken, userID } = useContext(StartContext);
  return (
    <View>
      <Text> Profil</Text>
      <Button title="Log Out" onPress={() => handleLogout()} />
    </View>
  )
}
