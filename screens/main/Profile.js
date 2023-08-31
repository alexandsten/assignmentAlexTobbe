import React from "react";
import { View, Text, SafeAreaView, Pressable, TextInput } from "react-native";
import { useContext, useState } from "react";
import { StartContext } from "../../contexts/StartContext";

export const Profile = () => {
  const { userID, userName, handleLogout, handleUpdateUsername } = useContext(StartContext);
  const [newUserName, setNewUserName] = useState(userName);

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 20 }}> {userName}</Text>
      <TextInput
        style={styles.input}
        value={newUserName}
        onChangeText={setNewUserName}
      />

<Pressable
        style={styles.button}
        onPress={() => {
          handleUpdateUsername(newUserName);
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
          Update Username
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
  },
};
