import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import { Switch } from "antd-mobile-rn";
import Footer from "./common/footer";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch1: false,
      switch2: false
    };
    this.navigation = this.navigation.bind(this);
  }

  static navigationOptions = {
    header: null
  };

  navigation(event) {
    this.props.navigation.navigate(event.navDestination);
  }

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
            <Text style={{ fontSize: 24 }}> About </Text>
          </View>
          <ScrollView style={{ marginTop: 10, flex: 1 }}>
            {/* <TouchableOpacity style={styles.notifContainer}>
              <Text style={styles.Text}> User </Text>
              <Image
                source={require("../assets/icons/user-icon.png")}
                style={{ height: 50, width: 50 }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.notifContainer}>
              <Text style={styles.Text}> About </Text>
              <Image
                source={require("../assets/icons/fact-Icon.png")}
                style={{ height: 50, width: 50 }}
              />
            </TouchableOpacity> */}

            <TouchableOpacity
              onPress={() => {
                this.setState({ switch2: !this.state.switch2 });
              }}
              style={styles.notifContainer}
            >
              <Text
                style={{
                  flex: 1,
                  flexDirection: "row",
                  fontSize: 24,
                  marginTop: 8,
                  paddingBottom: 10
                }}
              >
                {" "}
                Notification{" "}
              </Text>
              <Switch
                style={{
                  flexDirection: "row",
                  paddingRight: 10,
                  marginTop: 12,
                  marginRight: 15,
                  paddingBottom: 10
                }}
                checked={this.state.switch2}
                onPress={() => {
                  this.setState({ switch2: !this.state.switch2 });
                }}
              />
            </TouchableOpacity>

            {/* <TouchableOpacity
              onPress={() => {
                this.setState({ switch1: !this.state.switch1 });
              }}
              style={styles.notifContainer}
            >
              <Text style={styles.Text}> Grow Light </Text>
              <Switch
                value={this.state.switch1}
                onChange={() => {
                  this.setState({ switch1: !this.state.switch1 });
                }}
              />
            </TouchableOpacity>
         */}
            <View
              style={{
                flex: 1,
                backgroundColor: "#fff",
                flexDirection: "column",
                borderRadius: 10,
                marginTop: 8,
                paddingBottom: 10,
                marginLeft: 10,
                marginRight: 10,
                paddingRight: 5,
                paddingLeft: 5
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{ fontSize: 24, marginTop: 15, paddingBottom: 10 }}
                >
                  About Neptune
                </Text>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 5,
                    marginBottom: 15,
                    marginLeft: 25,
                    marginRight: 25
                  }}
                >
                  Neptune is an application that will give you real time data
                  monitoring where you can easily check your crops by just
                  checking it on your phone and it will send notifications to
                  your device to alert the user whenever there are changes or
                  critical issue happening like high level of ph or changes in
                  temperature.
                </Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: "#fff",
                flexDirection: "column",
                borderRadius: 10,
                marginTop: 8,
                paddingBottom: 10,
                marginLeft: 10,
                marginRight: 10,
                paddingRight: 5,
                paddingLeft: 5
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{ fontSize: 24, marginTop: 15, paddingBottom: 10 }}
                >
                  Importance
                </Text>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 5,
                    marginBottom: 15,
                    marginLeft: 25,
                    marginRight: 25
                  }}
                >
                  Aquaponics system is a combines aquatic plants with animal
                  production, it has a special set of water chemistry
                  requirements, and exelent water quality is needed to have a
                  healthy, balanced, functioning Aquaponics system.
                </Text>
              </View>
            </View>
          </ScrollView>
        </LinearGradient>

        <Footer
          navProps={this.navigation}
          activeRoute={this.props.navigation.state.routeName}
        />
      </View>
    );
  }
}

const styles = {
  Text: {
    flex: 1,
    height: 50,
    fontSize: 33
  },
  notifContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 5,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingRight: 5,
    paddingLeft: 5
  }
};
export default Settings;
