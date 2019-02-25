import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo";

import Footer from "./common/footer";
import Chart from "./common/chart";

class Water extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      activeData: "",
      selectedTab: "PH"
    };
    this.navigation = this.navigation.bind(this);
    this.categoryChoice = this.categoryChoice.bind(this);
  }

  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    const data = {
      PH: [
        { x: "Aug", y: 15.5 },
        { x: "Sept", y: 10 },
        { x: "Nov", y: 7 },
        { x: "Dec", y: 15 },
        { x: "Jan", y: 1 },
        { x: "Feb", y: 9 },
        { x: "March", y: 10 },
        { x: "April", y: 9 }
      ],
      SAL: [
        { x: "Aug", y: 8 },
        { x: "Sept", y: 8 },
        { x: "Nov", y: 5 },
        { x: "Dec", y: 15 },
        { x: "Jan", y: 7 },
        { x: "Feb", y: 10 },
        { x: "March", y: 10 },
        { x: "April", y: 4 }
      ],
      TEMP: [
        { x: "Aug", y: 5 },
        { x: "Sept", y: 3 },
        { x: "Nov", y: 6 },
        { x: "Dec", y: 10 },
        { x: "Jan", y: 7 },
        { x: "Feb", y: 14 },
        { x: "March", y: 10 },
        { x: "April", y: 4 }
      ],
      WL: [
        { x: "Aug", y: 15 },
        { x: "Sept", y: 13 },
        { x: "Nov", y: 10 },
        { x: "Dec", y: 15 },
        { x: "Jan", y: 7 },
        { x: "Feb", y: 10 },
        { x: "March", y: 3 },
        { x: "April", y: 4 }
      ]
    };
    this.setState({ data: data, activeData: data["PH"] });
  }

  navigation(event) {
    this.props.navigation.navigate(event.navDestination);
  }

  categoryChoice(event) {
    this.setState({ activeData: this.state.data[event], selectedTab: event });
  }

  render() {
    const { buttonStyle, titleHeader } = style;
    const { buttonStyleActive } = activeStyle;
    return (
      <LinearGradient
        colors={["#FFF", "#e6faff", "#b3f0ff", "#99ebff", "#80e5ff", "#66e0ff"]}
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
          <Text style={{ fontSize: 24 }}> Water Level Statistics </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            width: "100%",
            height: 30,
            backgroundColor: "#fff",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={
              this.state.selectedTab === "PH" ? buttonStyleActive : buttonStyle
            }
            onPress={() => {
              this.categoryChoice("PH");
            }}
          >
            <Text> PH Level</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={
              this.states.selectedTab === "SAL" ? buttonStyleActive : buttonStyle
            }
            onPress={() => {
              this.categoryChoice("SAL");
            }}
          >s
            <Text> Salinity</Text>
          </TouchableOpacity>
     */}

          <TouchableOpacity
            style={
              this.state.selectedTab === "TEMP"
                ? buttonStyleActive
                : buttonStyle
            }
            onPress={() => {
              this.categoryChoice("TEMP");
            }}
          >
            <Text> Temperature</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              this.state.selectedTab === "WL" ? buttonStyleActive : buttonStyle
            }
            onPress={() => {
              this.categoryChoice("WL");
            }}
          >
            <Text> Water Level </Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={{ flexDirection: "column" }}>
            <View style={titleHeader}>
              <Image
                style={{
                  height: 33,
                  width: 32,
                  marginRight: 20
                }}
                source={require("../assets/icons/fish-icon.png")}
              />
              <Text> Fish tank </Text>
            </View>
            <Chart dataProps={this.state.activeData} />
          </View>
        </ScrollView>

        <Footer
          navProps={this.navigation}
          activeRoute={this.props.navigation.state.routeName}
        />
      </LinearGradient>
    );
  }
}

const style = {
  buttonStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  titleHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50
  }
};

const activeStyle = {
  buttonStyleActive: {
    ...style.buttonStyle,
    backgroundColor: "#f2f2f2"
  }
};

export default Water;
