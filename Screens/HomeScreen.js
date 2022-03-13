import React, {useState} from 'react';
import { 
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';



export default function HomeScreen({ navigation }) {
    //to Store the name entered by user
    const [userName, setUserName] = useState("");
    
    function userInputHandler() {
        // If doesn't enter a name but clicks submit, do the following
        if (userName === "" ) {
            alert("Please Enter a Name")
        }
        else {
            //If user does enter a name, go to FavColor Screen and Pass the entered name as a prop
            navigation.navigate("FavColor", {
                name: userName
            });
        }
            
    }
    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    placeholder='Enter your Name'
                    //onChangeText is a function that gets executed when user types something
                    //It allows us to get the values user Enters
                    onChangeText={(val) => setUserName(val)}
                    value={userName}
                    style={styles.inputBox}
                />
            </View>
            <Button
                title="Proceed!"
                //When the button is pressed it should call the userInputHandler();
                onPress={userInputHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      /**
       * We want the container to be flexible, have white background, move items to the right and to the bottom(center both sides)
       */
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
    inputBox: {
      /**
       *We want the inputBox to have the words centered, have a bigger font and a space between its preceeding and proceeding components.
       */
    textAlign: "center",
    fontSize: 20,
    margin: 5,
  },
});