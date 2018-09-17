import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";

import Home from "./src/components/home";
import Footer from "./src/components/common/footer";


export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
          <RootStack />
          <Footer />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    'Home' : Home,
  },
  {
    initialRouteName: 'Home'
  }
)
