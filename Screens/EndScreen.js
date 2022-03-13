import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
//For Memory Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EndScreen({ navigation, route }) {
  // color and name variables
  const [userColor, setUserColor] = useState("");
  const [userName, setUserName] = useState("");

  const getData = async () => {
    //You don't have to memorize what's below. Just know that it is fetching the values we saved in FavColorScreen.
    //Check out https://react-native-async-storage.github.io/async-storage/docs/usage to read the docs
    //you can even copy and paste code from the above site.
    try {
      const name = await AsyncStorage.getItem("userName");
      if (name !== null) {
        const color = await AsyncStorage.getItem("userColor");
        if (color !== null) {
          setUserColor(color);
          setUserName(name);
        } else {
          alert("Color is NULL!");
        }
      } else {
        alert("Name is Null!");
      }
    } catch (e) {
      // error reading value
      alert("Error!");
    }
  };
/**
 * useEffect is a react hook just like useState. 
 * It is basically a function that runs everytime components are being mounted 
 * In simple terms, everytime your user comes to this screen, the first thing to run will be this function.
 */
  useEffect(() => {
    getData();
  });
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textStyles}>Name: {userName}</Text>
        <Text style={styles.textStyles}>Color: {userColor}</Text>
        <Button
          title="Back To Home?"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //I don't think I have to explain what the styles are doing anymore!
  container: {
    marginTop: '30%',
    marginLeft: '10%',
    padding: '10%',
    width: '80%',
    height: '60%',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 20
  },
  textStyles: {
    fontSize: 20,
    margin: 5,
  }
});
