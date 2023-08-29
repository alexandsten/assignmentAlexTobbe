import React, { useContext, useState } from "react";

import {
  Text,
  SafeAreaView,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  useEffect,
} from "react-native";
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
  const [textInputValue, setTextInputValue] = useState(""); // Local state for the input value

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
        Login
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
      <View style={{ marginTop: 5 }}></View>
      <TextInput
        value={userName} // Use local state value for TextInput
        style={styles.input}
        placeholder="batman"
        onChangeText={(value) => setUserName(value)} // Update local state value
      />
      <Text style={styles.textInput}>Password</Text>
      <TextInput
        value={userPassword} // Use local state value for TextInput
        style={styles.input}
        placeholder="batman"
        onChangeText={(value) => setUserPassword(value)} // Update local state value
      />
      <View style={styles.buttonGroup}>
        <Button
          style={styles.button}
          title="Login"
          onPress={() => {
            /*   setUserName(textInputValue); // Update context state with the local state value */
            handleLogin();
          }}
        />
        <Button
          style={styles.button}
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "#aaa",
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
    flex: 1,
    flexDirection: "row",
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
