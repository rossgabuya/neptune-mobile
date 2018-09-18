import React from "react";
import { View, Text, Image } from "react-native";

import Footer from "./common/footer";


class Water extends React.Component {
  constructor(props){
    super(props);
    this.navigation = this.navigation.bind(this);
  }

  navigation(event){
    this.props.navigation.navigate(event.navDestination)
  }

  render() {
    return(
      <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image source={require('../assets/icons/watericon.png')} style={{ height: 253 , width: 175 }}/>
          </View>
          <Footer navProps={this.navigation}/>
      </View>
    )
  }
}

export default Water;
