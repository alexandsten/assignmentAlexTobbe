import React, { useContext, useState } from "react";
import {Text, SafeAreaView, View,TextInput, StyleSheet, Pressable} from "react-native";
import { StartContext } from "../../contexts/StartContext";

export const Login = ({ navigation }) => {
  const {
    handleLogin,
    userName,
    setUserName,
    userPassword,
    setUserPassword,
    message,
  } = useContext(StartContext);
  const [textInputValue, setTextInputValue] = useState(""); 

  return (
    <SafeAreaView style={styles.container}>
      <Text>{message}</Text>
      <Text
        style={{
          color: "black",
          fontSize: 40,
          fontWeight: "bold",
          marginLeft: 15,
          marginRight: 15,
        }}
      >
        Sign in
      </Text>
      <Text
        style={{
          color: "grey",
          fontSize: 16,
          marginTop: 15,
          marginBottom: 25,

          marginLeft: 15,
          marginRight: 15,
        }}
      >
        Enter Your Details to Login
      </Text>
      <Text style={styles.textInput}>Username</Text>
      <View style={{ marginTop: 5 }}></View>
      <TextInput
        value={userName} 
        style={styles.input}
        placeholder="batman"
        onChangeText={(value) => setUserName(value)} 
      />
      <Text style={styles.textInput}>Password</Text>
      <TextInput
        value={userPassword} 
        style={styles.input}
        type="password"
        secureTextEntry={true}
        placeholder="batman"
        onChangeText={(value) => setUserPassword(value)} 
      />
      <View style={styles.buttonGroup}>
        <Pressable style={styles.button}
         
          onPress={() => { handleLogin(); }} >
        <Text style={{textAlign: 'center', color: "white", fontSize: 16, fontWeight: 'bold'}} >LogIn</Text>
        </Pressable>
        <Pressable style={{marginTop: 15}}
        
        onPress={() => navigation.navigate('Register')}
      >
      <Text style={{textAlign: 'center', color: 'gray', fontSize: 16}}>Don't have an account? Sign up</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },

  input: {
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
  },
  button:{ width: 200,
    backgroundColor: 'red',
    padding: 15,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 6  
    },
  buttonGroup: {
    flexDirection: "column",
    justifyContent: "center",
  },
  textInput: {
    color: "grey",
    fontSize: 14,
    marginTop: 10,

    marginLeft: 15,
    marginRight: 15,
  },
});
