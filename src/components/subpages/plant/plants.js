import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";

class Plants extends Component {
  render() {
    const { infoContainer, infoText, imageWrapper } = styles;
    return (
      <ScrollView>
        <Text style={infoText}>
          {" "}
          The aquaponics system works best with the following plants :
        </Text>
        <View style={infoContainer}>
          <Text style={infoText}>Lettuce</Text>
          <View style={imageWrapper}>
            <Image
              source={require("../../../assets/plants/lettuce1.jpg")}
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
            Photo by Adolfo Félix on Unsplash
          </Text>
        </View>

        <View style={infoContainer}>
          <Text style={infoText}> Basil </Text>
          <View style={imageWrapper}>
            <Image
              source={require("../../../assets/plants/basil1.jpg")}
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
            Photo by Alissa De Leva on Unsplash{" "}
          </Text>
        </View>

        <View style={infoContainer}>
          <Text style={infoText}>Mint</Text>
          <View style={imageWrapper}>
            <Image
              source={require("../../../assets/plants/mint1.jpg")}
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
            Photo by Marko Blažević on Unsplash{" "}
          </Text>
        </View>

        <View style={infoContainer}>
          <Text style={infoText}>Kale </Text>
          <View style={imageWrapper}>
            <Image
              source={require("../../../assets/plants/kale1.jpg")}
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
            Photo by Laura Johnston on Unsplash{" "}
          </Text>
        </View>

        <View style={infoContainer}>
          <Text style={infoText}>Chives </Text>
          <View style={imageWrapper}>
            <Image
              source={require("../../../assets/plants/chives1.jpg")}
              style={{
                height: 100,
                width: "70%",
                marginLeft: "15%",
                marginRight: "15%"
              }}
            />
          </View>
          <Text style={{ fontSize: 10, color: "gray", textAlign: "center" }}>
            Photo by Jake Vargo on feelgrafix.com{" "}
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

export default Plants;
