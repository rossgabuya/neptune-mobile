import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo";

import Footer from "./common/footer";
import Chart from "./common/chart";

class Water extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeData: [],
      activeDataLong:[],
      selectedTab: "PH",
      min: 5.9 , max: 7.5
    };
    this.navigation = this.navigation.bind(this);
    this.categoryChoice = this.categoryChoice.bind(this);
    this.getGraphData = this.getGraphData.bind(this);
    this.getTextData = this.getTextData.bind(this);
  }

  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    fetch("http://104.248.99.34:80/api/v1/graph",{
      method: 'get',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
          dataSourceLong: responseJson.data_long,
          time: new Date().toLocaleString()
        });

        let result = this.state.dataSource.map((key, index) => key);

        const items = new Object(result[result.length - 1]);

        this.getGraphData(items);

        let resultLong = this.state.dataSourceLong.map((key, index) => key);

        const itemsLong = new Object(resultLong[resultLong.length - 1]);

        this.getTextData(itemsLong);
      })
      .catch(error => {
        console.error(error);
      });
  }

  iconStatus = (status, above, less) => {
    return status >= above || status <= less ? (
      <View>
        <Image
          source={require("../assets/statusLogo/xButton.png")}
          style={{
            height: 30,
            width: 30,
            marginTop: 5,
            marginRight: 15
          }}
        />
      </View>
    ) : (
      <View>
        <Image
          source={require("../assets/statusLogo/checkButton.png")}
          style={{
            height: 35,
            width: 35,
            marginTop: 5,
            marginRight: 15
          }}
        />
      </View>
    );
  };

  getTextData(dataLong) {
    if (this.props.navigation.state.params) {
      const subPage = this.props.navigation.state.params.subPage;
      this.setState({
        dataLong: dataLong,
        activeDataLong: dataLong[subPage],
        selectedTab: subPage
      });
    } else {
      this.setState({ dataLong:dataLong,activeDataLong: dataLong["PH"] });
    }
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
    this.setState({ activeData: this.state.data[event], activeDataLong : this.state.dataLong[event] ,selectedTab: event });
  }

  render() {
    const { buttonStyle, titleHeader, notifContainer} = style;
    const { buttonStyleActive } = activeStyle;
    console.log("activeDataLong", this.state.activeDataLong);
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
              this.setState({ min: 5.9 , max: 7.5 });
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
              this.setState({ min: 20 , max: 35 });
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
              this.setState({ min: 50 , max: 95 });
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
          </View>
          <Chart dataProps={this.state.activeData} />

          <View style={{ marginBottom: 10, marginTop: 20, marginLeft: 20 }}>
            <Text style={{ flexDirection: "column", fontSize: 25 }}>
              Monthly Average Reading (Jan - Jun)
            </Text>
          </View>

          <View style={{ marginBottom: 30, marginTop: 20}}>
        {this.state.activeDataLong.map((mon,val) =>  
            <View style={notifContainer}  key={val.toString()}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ flex: 1, fontSize: 25, marginLeft: 10 }}>
                {mon.month}
              </Text>
              <Text style={{ fontSize: 25, marginTop: 5, marginRight: 15 }} >
                {mon.value}{this.state.selectedTab === "WL" ? "%" : ""}
              </Text>

              <View>{this.iconStatus(mon.value, this.state.max, this.state.min)}</View>
            </View>
            </View>
          )}

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
  notifContainer: {
    backgroundColor: "#fff",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingRight: 15,
    paddingLeft:15,
    paddingBottom: 10,
    borderRadius: 10
  },
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
