import React from "react";
import { View } from "react-native";
import { VictoryStack, VictoryChart, VictoryTheme, VictoryArea } from "victory-native";


const data = [
  { x: "Aug", y: 5 },
  { x: "Sept", y: 10 },
  { x: "Nov", y: 7 },
  { x: "Dec", y: 15 },
  { x: "Jan", y: 1 },
  { x: "Feb", y: 9 },
  { x: "March", y: 10 },
  { x: "April", y: 9 },
];

class Chart extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render(){
    return(
      <View style={styles.container}>
          <VictoryChart width={350} theme={VictoryTheme.material}>
              <VictoryStack colorScale={"blue"} >
                    <VictoryArea
                      data={data}
                      interpolation={"basis"}
                    />
              </VictoryStack>
          </VictoryChart>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
    height: 305
  }
};

export default Chart;
