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
    this.getGraphData = this.getGraphData.bind(this);
  }

  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    fetch('http://192.168.254.110:3001/v1/waters.json')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.data,
        time: new Date().toLocaleString()
      }, function(){

      });
      
      let result = this.state.dataSource.map(
        (key,index) => key
      );
      //console.log(result);

      const items = new Object(result[result.length - 1]);
      //console.log(items);
      
      this.getGraphData(items);
    })
    .catch((error) =>{
      console.error(error);
    });
   
  }

  getGraphData(data) {
    if (this.props.navigation.state.params) {
      const subPage = this.props.navigation.state.params.subPage;
      this.setState({
        data: data,
        activeData: data[subPage],
        selectedTab: subPage
      });
    } else {
      this.setState({ data: data, activeData: data["PH"] });
    }
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
            {console.log(this.state.activeData)}
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
