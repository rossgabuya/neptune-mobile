import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";

class Fishes extends Component {
  render() {
    const { infoContainer, infoText, imageWrapper } = styles;
    return (
      <ScrollView>
        <Text style={infoText}>
          {" "}
          Looking for the right fish for your aquaponics system? here are some
          suggestions :
        </Text>
        <View style={infoContainer}>
          <Text style={infoText}>Tilapia</Text>
          <View style={imageWrapper}>
            <Image
              source={require("../../../assets/fishes/tilapia1.jpg")}
              style={{
                height: 100,
                width: "70%",
                marginLeft: "15%",
                marginRight: "15%"
              }}
            />
          </View>
          <Text style={{ fontSize: 10, color: "gray", textAlign: "center" }}>
            {" "}
            Photo by Dominyk Lever on flickr.com{" "}
          </Text>
        </View>

        <View style={infoContainer}>
          <Text style={infoText}> Crappie </Text>
          <View style={imageWrapper}>
            <Image
              source={require("../../../assets/fishes/crappie1.jpg")}
              style={{
                height: 100,
                width: "70%",
                marginLeft: "15%",
                marginRight: "15%"
              }}
            />
          </View>
          <Text style={{ fontSize: 10, color: "gray", textAlign: "center" }}>
            {" "}
            Photo by Isaac M on flickr.com{" "}
          </Text>
        </View>

        <View style={infoContainer}>
          <Text style={infoText}>Koi</Text>
          <View style={imageWrapper}>
            <Image
              source={require("../../../assets/fishes/koi1.jpg")}
              style={{
                height: 100,
                width: "70%",
                marginLeft: "15%",
                marginRight: "15%"
              }}
            />
          </View>
          <Text style={{ fontSize: 10, color: "gray", textAlign: "center" }}>
            {" "}
            Photo by Ty Williams on Unsplash{" "}
          </Text>
        </View>

        <View style={infoContainer}>
          <Text style={infoText}>Fancy Goldfish </Text>
          <View style={imageWrapper}>
            <Image
              source={require("../../../assets/fishes/goldfish1.jpg")}
              style={{
                height: 100,
                width: "70%",
                marginLeft: "15%",
                marginRight: "15%"
              }}
            />
          </View>
          <Text style={{ fontSize: 10, color: "gray", textAlign: "center" }}>
            Photo by sanjiv nayak on Unsplash{" "}
          </Text>
        </View>

        <View style={infoContainer}>
          <Text style={infoText}>Pacu </Text>
          <View style={imageWrapper}>
            <Image
              source={require("../../../assets/fishes/pacu1.jpg")}
              style={{
                height: 100,
                width: "70%",
                marginLeft: "15%",
                marginRight: "15%"
              }}
            />
          </View>
          <Text style={{ fontSize: 10, color: "gray", textAlign: "center" }}>
            {" "}
            Photo by Simon Q on flickr.com
          </Text>
        </View>

        <Text style={infoText}> *and more.!!</Text>
        <Text style={{ fontSize: 10 }}>
          {" "}
          **source : aquaponics.com/recommended-plants-and-fish-in-aquaponics{" "}
        </Text>
      </ScrollView>
    );
  }
}

const styles = {
  infoContainer: {
    backgroundColor: "#fff",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
    borderRadius: 10
  },
  infoText: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingLeft: 5,
    justifyContent: "center",
    textAlign: "center"
  },
  imageWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
};

export default Fishes;
