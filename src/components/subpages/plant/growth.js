import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";


class Growth extends Component {
  render(){
    const { growthContainer, growthText } = styles;
    return(
      <ScrollView >

        <View style={growthContainer}>
          <Text style={growthText}>Aug 1 - Aug 7 </Text>
          <View style={{ flexDirection: "row" }}>
            <Image source={require("../../../assets/testplant.jpg")} style={{ height: 100, width: "48%", marginRight: 4 }}/>
            <Image source={require("../../../assets/testplant.jpg")} style={{ height: 100, width: "48%" }}/>
          </View>
        </View>

        <View style={growthContainer}>
          <Text style={growthText}>Aug 8 - Aug 14 </Text>
          <View style={{ flexDirection: "row" }}>
            <Image source={require("../../../assets/plant2.jpg")} style={{ height: 100, width: "48%", marginRight: 4 }}/>
            <Image source={require("../../../assets/plant2.jpg")} style={{ height: 100, width: "48%" }}/>
          </View>
        </View>

        <View style={growthContainer}>
          <Text style={growthText}>Aug 14 - Aug 21 </Text>
          <View style={{ flexDirection: "row" }}>
            <Image source={require("../../../assets/plant3.jpg")} style={{ height: 100, width: "48%", marginRight: 4 }}/>
            <Image source={require("../../../assets/plant3.jpg")} style={{ height: 100, width: "48%" }}/>
          </View>
        </View>

        <View style={growthContainer}>
          <Text style={growthText}>Aug 22 - Aug 28 </Text>
          <View style={{ flexDirection: "row" }}>
            <Image source={require("../../../assets/plant4.jpg")} style={{ height: 100, width: "48%", marginRight: 4 }}/>
            <Image source={require("../../../assets/plant4.jpg")} style={{ height: 100, width: "48%" }}/>
          </View>
        </View>

        <View style={growthContainer}>
          <Text style={growthText}>Aug 29 - Sept4 </Text>
          <View style={{ flexDirection: "row" }}>
            <Image source={require("../../../assets/plant5.jpg")} style={{ height: 100, width: "48%", marginRight: 4 }}/>
            <Image source={require("../../../assets/plant5.jpg")} style={{ height: 100, width: "48%" }}/>
          </View>
        </View>

      </ScrollView>
    );
  }
}

const styles = {
  growthContainer: {
    backgroundColor: "#fff",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10
  },
  growthText: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18
  }
}

export default Growth;
