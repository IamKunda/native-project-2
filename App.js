

//Import navigation tools
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './Screens/HomeScreen';
import FavColorScreen from './Screens/FavColorScreen';
import EndScreen from './Screens/EndScreen';

//Create an object of Stack Navigation
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome to my App" }}
        />
        <Stack.Screen
          name="FavColor"
          component={FavColorScreen}
          options={{ title: "Let's get to Know you" }}
        />
        <Stack.Screen
          name="EndScreen"
          component={EndScreen}
          options={{ title: "I know abit about You" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

