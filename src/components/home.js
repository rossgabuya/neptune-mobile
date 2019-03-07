import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo";
// import { Icon } from "@ant-design/icons-react-native";
import { StatusBar } from "react-native";
import Footer from "./common/footer";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = this.navigation.bind(this);
    this.state = {
      time: new Date().toLocaleString(),
      phStatus: 6.5,
      waterStatus: 40,
      temperatureStatus: 5
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    return fetch("http://159.89.211.119/v1/homes.json")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
          time: new Date().toLocaleString()
        });

        let result = this.state.dataSource.map((key, index) => key);
        //console.log(result);

        let items = new Object(result[result.length - 1]);
        //console.log(items);

        this.setState({
          ph: items.ph,
          temp: items.temp,
          vol: items.vol
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  static navigationOptions = {
    header: null
  };

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

  navigation(event) {
    this.props.navigation.navigate(event.navDestination);
  }

  navProps(event, obj) {
    this.props.navigation.navigate(event, obj);
  }

  render() {
    return (
      <LinearGradient
        colors={["#FFF", "#e6faff", "#b3f0ff", "#99ebff", "#80e5ff", "#66e0ff"]}
        start={[0, 0]}
        end={[1, 1]}
        style={{ flex: 1 }}
      >
        <StatusBar
          barStyle="dark-content"
          // dark-content, light-content and default
          hidden={false}
          //To hide statusBar
          backgroundColor="rgba(0,0,0,0.2)"
          //Background color of statusBar
          translucent={false}
          //allowing light, but not detailed shapes
          networkActivityIndicatorVisible={true}
        />
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
          <Text style={{ fontSize: 24 }}> Home </Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require("../assets/icons/logoFinal.png")}
              style={{
                height: 150,
                width: 150,
                marginBottom: 30,
                marginTop: 100,
                justifyContent: "center",
                alignContent: "center"
              }}
            />
            <Text style={{ flexDirection: "column", fontSize: 20 }}>
              Neptune
            </Text>
          </View>

          <View style={{ marginBottom: 10, marginTop: 20, marginLeft: 20 }}>
            <Text style={{ flexDirection: "column", fontSize: 25 }}>
              Quick Status:
            </Text>
          </View>

          <View style={styles.notifContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ flex: 1, fontSize: 25, marginLeft: 10, marginTop: 5 }}
              >
                Ph Level
              </Text>

              <Text style={{ fontSize: 25, marginTop: 5, marginRight: 15 }}>
                {this.state.ph}
              </Text>
              <View>{this.iconStatus(this.state.ph, 7.5, 5.9)}</View>
              <TouchableOpacity
                onPress={() => {
                  this.navProps("Water", { subPage: "PH" });
                }}
              >
                <Image
                  source={require("../assets/statusLogo/arrowLeft.png")}
                  style={{
                    height: 35,
                    width: 35,
                    marginTop: 5,
                    marginRight: 15
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.notifContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ flex: 1, fontSize: 25, marginLeft: 10 }}>
                Water Volume
              </Text>

              <Text style={{ fontSize: 25, marginTop: 5, marginRight: 15 }}>
                {this.state.vol}%
              </Text>
              <View>{this.iconStatus(this.state.vol, 110, 30)}</View>
              <TouchableOpacity
                onPress={() => {
                  this.navProps("Water", { subPage: "WL" });
                }}
              >
                <Image
                  source={require("../assets/statusLogo/arrowLeft.png")}
                  style={{
                    height: 35,
                    width: 35,
                    marginTop: 5,
                    marginRight: 15
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.notifContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ flex: 1, fontSize: 25, marginLeft: 10 }}>
                Temperature
              </Text>
              <Text style={{ fontSize: 25, marginTop: 5, marginRight: 15 }}>
                {this.state.temp}
              </Text>
              {this.iconStatus(this.state.temp, 36, 19)}
              <TouchableOpacity
                onPress={() => {
                  this.navProps("Water", { subPage: "TEMP" });
                }}
              >
                <Image
                  source={require("../assets/statusLogo/arrowLeft.png")}
                  style={{
                    height: 35,
                    width: 35,
                    marginTop: 5,
                    marginRight: 15
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              marginBottom: 10,
              marginTop: 10,
              marginLeft: 22,
              flexDirection: "row"
            }}
          >
            <Text style={{ flexDirection: "row", fontSize: 20 }}>
              As of: {this.state.time}
            </Text>
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

const styles = {
  notifContainer: {
    backgroundColor: "#fff",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 10,
    borderRadius: 10
  },
  Text: {
    fontSize: 35,
    height: 50
  }
};
export default Home;
