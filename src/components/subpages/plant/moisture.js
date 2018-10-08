import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { VictoryChart, VictoryLine, VictoryScatter } from "victory-native";

const data = [
  { x: 0, y: 0 },
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 3, y: 4 },
  { x: 4, y: 3 },
  { x: 5, y: 5 }
];

class Moisture extends Component {
  constructor() {
   super();
   this.state = {
     interpolation: "linear",
     polar: false
   };
 }

  render(){
    return(
      <View style={{ alignItems: "center" }}>
        <Text style={styles.headerText}> Moisture Status</Text>
        <VictoryChart polar={this.state.polar} height={390}>
          <VictoryLine
            interpolation={this.state.interpolation} data={data}
            style={{ data: { stroke: "#c43a31" } }}
          />
          <VictoryScatter data={data}
            size={5}
            style={{ data: { fill: "#c43a31" } }}
          />
        </VictoryChart>
      </View>
    );
  }
}

const styles = {
  headerText: {
    fontSize: 24,
  }
}

export default Moisture;
