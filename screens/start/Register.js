import React, { useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  SafeAreaView,
  Pressable,
} from "react-native";
import { StartContext } from "../../contexts/StartContext";

export const Register = ({ navigation }) => {
  const {
    userName,
    setUserName,
    userPassword,
    setUserPassword,
    setAccessToken,
  } = useContext(StartContext);
  const [textInputValue, setTextInputValue] = useState(""); // Local state for the input value
  const [message, setMessage] = useState("");
  const [registerCheck, setRegisterCheck] = useState(null);

  const handleRegister = async () => {
    // funktion som hämtar och bearbetar API'et

    try {
      console.log(userName);

      const response = await fetch(
        `https://chat-api-with-auth.up.railway.app/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userName,
            password: userPassword,
          }),
        }
      );
      const loginAPI = await response.json();

      console.log(loginAPI.message);
      if( loginAPI.status == "200") {
        setRegisterCheck("yes")
        navigation.navigate("Login");
      } else {
         console.log("wrong!");
         setMessage(loginAPI.message);
      }
    } catch (error) {
      console.log(error);
    }
    registerCheck !== null
      ? navigation.navigate("Login")
      : console.log("register not registered");
  };

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
        Sign up
      </Text>
      <Text
        style={{
          color: "grey",
          fontSize: 16,
          marginTop: 10,
          marginBottom: 25,

          marginLeft: 15,
          marginRight: 15,
        }}
      >
        Enter Your Details to Login
      </Text>
      <Text style={styles.textInput}>Username</Text>
      <TextInput
        value={userName} // Use local state value for TextInput
        style={styles.input}
        placeholder="batman"
        onChangeText={(value) => setUserName(value)} // Update local state value
      />
      <Text style={styles.textInput}>Password</Text>
      <TextInput
        value={userPassword}
        secureTextEntry={true}
        style={styles.input}
        placeholder="batman"
        onChangeText={(value) => setUserPassword(value)} // Update local state value
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          /*   setUserName(textInputValue); // Update context state with the local state value */
          handleRegister();
          registerCheck !== null
            ? navigation.navigate("Login")
            : console.log("hello world");
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Sign Up
        </Text>
      </Pressable>

      <Pressable
        style={{ marginTop: 15 }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
          Already have an account? Sign in
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
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
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button:{ width: 200,
    backgroundColor: 'red',
    padding: 15,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 6  
    },
  textInput: {
    color: "grey",
    fontSize: 14,
    marginTop: 10,

    marginLeft: 15,
    marginRight: 15,
  },
});
