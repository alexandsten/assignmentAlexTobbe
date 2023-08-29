import React, {useContext, useState, useEffect} from 'react'
import {Text, View, Button, StyleSheet, FlatList} from 'react-native'
import { StartContext } from '../../contexts/StartContext'

export const Chat = () => {
  const {handleLogout} = useContext(StartContext)
  const [chatData, setChatData] = useState('');
  const [chatCheck, setChatCheck] = useState(null);

  const handleChat = async () => {   // funktion som hämtar och bearbetar API'et
    
    try {
     
      
      const response = await fetch(`https://chat-api-with-auth.up.railway.app/messages`, {

      method: 'GET',
      headers: {
       
        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU3OTMxYTJjMGNjOGY1MzRmZGYwNWEiLCJ1c2VybmFtZSI6Im1pc3NpbmdubyIsImRhdGUiOiIyMDIzLTA4LTI0VDE3OjI3OjU0Ljc3NVoiLCJpYXQiOjE2OTI4OTgxMDB9.pz52q_kNQmlb3s_RUakB38PSKtJ7X94B4UZZoT-GB14'
      } } );
      const ChatAPI = await response.json();

      
      setChatData(ChatAPI.data)
      
      console.log(chatData)
      
    } catch(error) {
      console.log(error)
    }
   
  }

  useEffect(() => {
    handleChat();
  }, []);

  
  return (
    <View style={styles.container}>
      <Text>Main - home</Text>
      <FlatList
        data={chatData}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <Text style={{    fontSize: 18,
          }}>{item.content}</Text>
        )}
      />
      <Button title="Logout" onPress={() => handleLogout()} />
     
      
     
      
      
     
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'white',

      
      
      
    },
    
  });