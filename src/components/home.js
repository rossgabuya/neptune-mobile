import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo";
// import { Icon } from "@ant-design/icons-react-native";

import Footer from "./common/footer";
import { CheckBox } from "native-base";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = this.navigation.bind(this);
    this.state = {
      time: new Date().toLocaleString(),
      moistureStatus: 10,
      phStatus: 6.5,
      waterStatus: 40,
      salnityStatus: 20
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
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

  render() {
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
              Neptune{" "}
            </Text>
          </View>

          <View style={{ marginBottom: 10, marginTop: 20, marginLeft: 20 }}>
            <Text style={{ flexDirection: "column", fontSize: 35 }}>
              Quick Status:{" "}
            </Text>
          </View>

          <View style={styles.notifContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ flex: 1, fontSize: 30, marginLeft: 10 }}>
                {" "}
                Moisture{" "}
              </Text>
              <Text style={{ fontSize: 25, marginTop: 5, marginRight: 15 }}>
                {this.state.moistureStatus}%{" "}
              </Text>
              {this.iconStatus(this.state.moistureStatus, 10, 7)}
              <TouchableOpacity>
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
              <Text
                style={{ flex: 1, fontSize: 30, marginLeft: 10, marginTop: 5 }}
              >
                {" "}
                Ph Level{" "}
              </Text>
              <Text style={{ fontSize: 25, marginTop: 5, marginRight: 15 }}>
                {this.state.phStatus}{" "}
              </Text>
              {this.iconStatus(this.state.phStatus, 7, 6)}
              <TouchableOpacity>
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
              <Text style={{ flex: 1, fontSize: 30, marginLeft: 10 }}>
                {" "}
                Water Volume{" "}
              </Text>
              <Text style={{ fontSize: 25, marginTop: 5, marginRight: 15 }}>
                {this.state.waterStatus}%{" "}
              </Text>
              {this.iconStatus(this.state.waterStatus, 110, 30)}
              <TouchableOpacity>
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
              <Text style={{ flex: 1, fontSize: 30, marginLeft: 10 }}>
                Salinity{" "}
              </Text>
              <Text style={{ fontSize: 25, marginTop: 5, marginRight: 15 }}>
                {this.state.salnityStatus}%{" "}
              </Text>
              {this.iconStatus(this.state.salnityStatus, 10, 0)}
              <TouchableOpacity>
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
              As of: {this.state.time}"{" "}
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
