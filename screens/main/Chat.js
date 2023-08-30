import React, { useContext, useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, FlatList, TextInput } from 'react-native';
import { StartContext } from '../../contexts/StartContext';

export const Chat = () => {
  const { handleLogout, accessToken, userID } = useContext(StartContext);
  const [chatData, setChatData] = useState(``);
  const [userMessage, setUserMessage] = useState(``);
 

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

  const sendChat = async () => {
    try {
      const response = await fetch(`https://chat-api-with-auth.up.railway.app/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken,
        },body: JSON.stringify({
          'content': userMessage
           
        })
      });
      const chatAPI = await response.json();
      console.log('mitt it är ' + userID)
      handleChat()
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleChat();
  }, []);

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
            { textAlign: userID == item.user._id ? 'right' : 'left',
            backgroundColor: userID === item.user._id ? 'green' : 'blue',
            padding: 10, borderRadius: 10, marginBottom: 5, maxWidth: '100%',color: 'white' },
          ]}
        >
          {item.content}
        </Text> :
          <Text>Nä</Text>
      
        )}
      />
      <TextInput
        value={userMessage} // Use local state value for TextInput
        style={styles.input}
        onChangeText={(value) => setUserMessage(value)} // Update local state value
      />
      <Button
          style={styles.button}
          title="Send Message"
          color="green"
          onPress={() => {
            /*   setUserName(textInputValue); // Update context state with the local state value */
            sendChat();
          }}
        />
      <Button title="Log Out" onPress={() => handleLogout()} />

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',   
      backgroundColor: 'pink'
    }, input: {
      marginLeft: 25,
      marginRight: 25,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "black",
      padding: 18,
      backgroundColor: "#EBE9E9",
      marginHorizontal: 15,
      borderWidth: 0.5,
      marginVertical: 10,
    }
    
  });