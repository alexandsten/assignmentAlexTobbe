import React, { useContext, useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';
import { StartContext } from '../../contexts/StartContext';

export const Chat = () => {
  const { handleLogout, accessToken, userID } = useContext(StartContext);
  const [chatData, setChatData] = useState(``);
 

  const handleChat = async () => {
    try {
      const response = await fetch(`https://chat-api-with-auth.up.railway.app/messages`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + accessToken,
        },
      });
      const chatAPI = await response.json();
      console.log('mitt it är ' + userID)
      setChatData(chatAPI.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleChat();
  }, [2]);

  return (
    <View style={styles.container}>
      <Text>Main - home</Text>
      <FlatList
        style={{ flex: 1 }}
        data={chatData}
        
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          
          item.user  ?
          <Text
          style={[
            styles.messageText,
            { textAlign: userID == item.user._id ? 'left' : 'right' },
          ]}
        >
          {item.content}
        </Text> :
          <Text>Nä</Text>
      
        )}
      />
      <Button title="Test login function" onPress={() => handleLogout()} />

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      
      
      backgroundColor: 'pink'
    },
    
  });