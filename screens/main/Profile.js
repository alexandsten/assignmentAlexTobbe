import React from "react";
import { View, Text, SafeAreaView, Pressable, TextInput } from "react-native";
import { useContext, useState } from "react";
import { StartContext } from "../../contexts/StartContext";

export const Profile = () => {
  const { handleLogout, handleUpdateUsername, firstName, lastName } = useContext(StartContext);
  const [newUserName, setNewUserName] = useState('');
  const [newLastName, setNewLastName] = useState('');

  return (
    <SafeAreaView>


      <Text style={{ fontSize: 20 }}> {firstName} {lastName} </Text>

      <Text style={{ fontSize: 20 }}> First name: </Text>
      <TextInput
        style={styles.input}
        value={newUserName}
        onChangeText={setNewUserName}
      />

<Text style={{ fontSize: 20 }}> Last name: </Text>
      <TextInput
        style={styles.input}
        value={newLastName}
        onChangeText={setNewLastName}
      />

<Pressable
        style={styles.button}
        onPress={() => {
          handleUpdateUsername(newUserName, newLastName);
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
          Update your name
        </Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => {
          handleLogout();
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
          LogOut
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

styles = {
  button: {
    width: 200,
    backgroundColor: "red",
    padding: 15,
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 6,
  },input: {
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
};
