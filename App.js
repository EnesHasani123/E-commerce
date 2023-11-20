import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import { useFonts } from "expo-font";
import "react-native-reanimated";

import { Welcome, Walkthrough, AuthMain, Home, ScanProduct } from "./screens";

const Stack = createStackNavigator();

const App = () => {
  // const [fontsLoaded] = useFonts({
  //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  // });

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Welcome"}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
        <Stack.Screen name="AuthMain" component={AuthMain} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ScanProduct" component={ScanProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
