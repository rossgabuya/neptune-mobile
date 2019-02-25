import React from "react";
import { View, ScrollView, Card, Image, Text } from "react-native";
import { LinearGradient } from "expo";
import Footer from "../../common/footer";

class PlantGuide extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "#FFF",
            "#e6faff",
            "#b3f0ff",
            "#99ebff",
            "#80e5ff",
            "#66e0ff"
          ]}
          start={[0, 0]}
          end={[1, 1]}
          style={{ flex: 1 }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: 60,
              backgroundColor: "#fff",
              flexDirection: "row"
            }}
          >
            <Text style={{ fontSize: 24 }}> Plant Guide </Text>
          </View>
          <View style={{ marginTop: 20, flex: 1 }}>
            <Text>sample</Text>
          </View>
        </LinearGradient>

        <Footer
          navProps={this.navigation}
          activeRoute={this.props.navigation.state.routeName}
        />
      </View>
    );
  }
}

//
// const styles= {
//   Text:{
//     flex:1,
//     height:50,
//     fontSize: 33,
//   },
//   notifContainer:{
//     flexDirection: "row",
//     marginTop: 10,
//     backgroundColor:"#fff",
//     borderRadius: 10,
//     marginTop:8,
//     paddingBottom:10,
//
//   }
// }

export default PlantGuide;
