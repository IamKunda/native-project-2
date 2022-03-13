import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

//For Memory Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FavColorScreen({ navigation, route }) {
  //State Variable and Function
  const [userColor, setUserColor] = useState("");

  //Use async storage to store userName and Color in Memory
  const storeName = async (value) => {
    try {
      await AsyncStorage.setItem("userName", value);
    } catch (e) {
      // saving error
      alert("Failed to Save Data!");
    }
  };
  const storeColor = async (value) => {
    try {
      await AsyncStorage.setItem("userColor", value);
    } catch (e) {
      // saving error
      alert("Failed to Save Data!");
    }
  };

  return (
    <View>
      <View></View>
      <View style={styles.container}>
        <Text>Hello {route.params.name}</Text>
        <Text>Which of the Following is your Favorite Color?</Text>
        <Pressable
          onPress={() => {
            /**
             When the Pressable area is pressed, it
             -sets the userColor variable in useState to the color on the Pressable
             -stores the userColor and userName to memory
             and 
             -navigates us to the EndScreen
             */
            setUserColor("Orange");
            storeName(route.params.name);
            storeColor("Orange");

            navigation.navigate("EndScreen");
          }}
          style={styles.orangeBox}
        >
          <Text style={styles.orangeBoxText}>Orange</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setUserColor("Gray");
            storeName(route.params.name);
            storeColor("Gray");

            navigation.navigate("EndScreen");
          }}
          style={styles.grayBox}
        >
          <Text style={styles.grayBoxText}>Gray</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setUserColor("Black");
            storeName(route.params.name);
            storeColor("Black");

            navigation.navigate("EndScreen");
          }}
          style={styles.blackBox}
        >
          <Text style={styles.blackBoxText}>Black</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //Move the container 10px to the bottom
    //center items horizontally and vertically
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  //Boxes style the entire Pressable and add the background color
  orangeBox: {
    backgroundColor: "orange",
    color: "white",
    padding: 5,
    width: "80%",
    alignItems: "center",
    margin: 5,
  },
  grayBox: {
    backgroundColor: "gray",
    color: "black",
    padding: 5,
    width: "80%",
    alignItems: "center",
    margin: 5,
  },
  blackBox: {
    backgroundColor: "black",
    color: "white",
    padding: 8,
    width: "80%",
    alignItems: "center",
    margin: 5,
  },
  //Below styles control the words inside respective Pressable's
  orangeBoxText: {
    color: "black",
    fontSize: 25,
  },
  grayBoxText: {
    color: "black",
    fontSize: 25,
  },
  blackBoxText: {
    color: "white",
    fontSize: 25,
  },
});
