import React, { useContext, useState, useEffect, useRef } from 'react';
import { Text, View, Button, StyleSheet, FlatList, TextInput, Pressable, ScrollView } from 'react-native';
import { StartContext } from '../../contexts/StartContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Chat = () => {
  const { accessToken, userID} = useContext(StartContext);
  const [chatData, setChatData] = useState(``);
  const [userMessage, setUserMessage] = useState(``);

  const scrollViewRef = useRef();
 
  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };
  const handleChat = async () => {
    try {
      const response = await fetch(`https://chat-api-with-auth.up.railway.app/messages`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + accessToken,
        },
      });
      
      const chatAPI = await response.json();
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
      scrollToBottom();
    } catch (error) {
      console.log(error);
    }
  };


  const deleteChat = async (messageID) => {
    try {
      const response = await fetch(`https://chat-api-with-auth.up.railway.app/messages/${messageID}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + accessToken,
        },
      });
      if (response.status === 200) {alert('Meddelande raderat')
      handleChat()} else console.log('Något gick fel med att radera meddelandet')
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleChat();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef} 
        style={{ flex: 1 }}
      >
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
            padding: 10, borderRadius: 10, marginBottom: 5,color: 'white' },
          ]}
        
          onPress={() => {
            /*   setUserName(textInputValue);  */
            deleteChat(item._id);
          }}
        
        > {item.user.username} : 
          {item.content}
        </Text> 
     
        :
          <Text>Nä</Text>
      
        )}
      />
      </ScrollView> 

      <View style={styles.buttonGroup}>
      <TextInput
        value={userMessage} 
        style={styles.input}
        onChangeText={(value) => setUserMessage(value)} 
      />
      
        <Pressable style={styles.button}
         
          onPress={() => {
            /*   setUserName(textInputValue); */
            sendChat();
          }}
        >
          <Text style={{textAlign: 'center', color: "white", fontSize: 16, fontWeight: 'bold'}} >Send Message</Text>
        </Pressable>
        
      
      </View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',   
      
    }, input: {
      
     width: 290,
      borderColor: "black",
      padding: 10,
      marginTop: 30,
      backgroundColor: "#EBE9E9",
      borderRadius: 6 ,
      borderWidth: 0.5,
      marginRight: 10
      
    },
    button:{
      width: 100,
      backgroundColor: 'green',
      padding: 10,
      marginTop: 30,
      
      borderRadius: 6  
      },
    buttonGroup: {
      
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 30
    },
    
  });

  // onPress={() => {
  //   /*   setUserName(textInputValue); //  */
  //   sendChat();