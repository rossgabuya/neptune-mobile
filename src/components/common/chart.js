import React from "react";
import { View } from "react-native";
import {
  VictoryStack,
  VictoryChart,
  VictoryTheme,
  VictoryArea
} from "victory-native";

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ zIndex: 0 }}>
          <VictoryChart width={350} theme={VictoryTheme.material}>
            <VictoryStack colorScale={"blue"}>
              <VictoryArea
                data={this.props.dataProps}
                interpolation={"basis"}
              />
            </VictoryStack>
          </VictoryChart>
        </View>

        <View
          style={{
            zIndex: 1,
            position: "absolute",
            height: "100%",
            width: "100%"
          }}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#f5fcff",
    height: 305,
    position: "relative"
  }
};

export default Chart;
