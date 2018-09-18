import React from "react";
import { View, Text, ScrollView } from "react-native";

import Footer from "./common/footer";
import Chart from "./common/chart";

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
            <ScrollView>
              <View style={{ flexDirection: "row" }}>
                <View style={{ justifyContent: "center", width: 40 }}>
                  <Text>PH   </Text>
                </View>
                <Chart />
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ justifyContent: "center", width: 40  }}>
                  <Text>SOL   </Text>
                </View>
                <Chart />
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ justifyContent: "center", width: 40  }}>
                  <Text>TEMP   </Text>
                </View>
                <Chart />
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ justifyContent: "center", width: 40  }}>
                  <Text>WL   </Text>
                </View>
                <Chart />
              </View>
            </ScrollView>
          <Footer navProps={this.navigation}/>
      </View>
    )
  }
}



export default Water;
