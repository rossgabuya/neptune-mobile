import React from "react";
import { View, Text, Image } from "react-native";

class Home extends React.Component {
  render() {
    return(
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Image source={require('../assets/logo/logo3.png')} style={{ height: 253 , width: 170 }}/>
      </View>
    )
  }
}

export default Home;
