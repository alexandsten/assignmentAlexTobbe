import React from "react";
import { View, Text, SafeAreaView, Pressable, TextInput, Button } from "react-native";
import { useContext, useState } from "react";
import { StartContext } from "../../contexts/StartContext";

export const Profile = () => {
  const { handleLogout, handleUpdateUsername, firstName, lastName, accessToken, setAccessToken } = useContext(StartContext);
  const [newUserName, setNewUserName] = useState('');
  const [newLastName, setNewLastName] = useState('');


  // raderar den inloggade användarens konto
  const handleDelete = async () => {

    try {
      const response = await fetch(
        `https://chat-api-with-auth.up.railway.app/users`,
        {
          method: "DELETE",
          headers: {
            'Authorization': 'Bearer ' + accessToken,
          },
        }
      );

      if (response.status === 200) {
        console.log("du har raderat ditt konto")
        setAccessToken(null)
      } else {
        console.log("Något gick fel");
      }

    } catch (error) {
      console.log(error);
    }
  };

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

      <Pressable
        style={styles.button}
        onPress={() => {
          handleDelete();
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
          Delete account
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
