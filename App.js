import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";

import Home from "./src/components/home";
import Water from "./src/components/water";
import Plant from "./src/components/plant";
import Settings from "./src/components/settings";


export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
          <RootStack />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    'Home' : Home,
    'Water': Water,
    'Plant': Plant,
    'Setting': Settings
  },
  {
    initialRouteName: 'Home'
  }
)
