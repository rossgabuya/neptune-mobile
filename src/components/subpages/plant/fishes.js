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
          <Text
            style={{
              fontSize: 12,
              marginLeft: 20,
              marginTop: 10,
              marginBottom: 5
            }}
          >
            Ideal Temperature Range:   22° -30° C
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 20 }}>
            Plate Size in: 9 Months
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 25 }}>
            • Popular, edible, warm-water aquaponics fish
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 25 }}>
            • Easy to breed and fast growing
          </Text>
        </View>

        <View style={infoContainer}>
          <Text style={infoText}> Cat Fish </Text>
          <View style={imageWrapper}>
            <Image
              source={require("../../../assets/fishes/catfish.jpg")}
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
          <Text
            style={{
              fontSize: 12,
              marginLeft: 20,
              marginTop: 10,
              marginBottom: 5
            }}
          >
            Ideal Temperature Range:   25° – 30° C
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 20 }}>
            Plate Size in: 5 – 10 Months
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 25 }}>
            • Edible, popular aquaponics fish
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 25 }}>
            • High food conversion ratio makes them a fast growing fish
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 25 }}>
            • Sensitive to water temperature, water quality, and pH
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
          <Text
            style={{
              fontSize: 12,
              marginLeft: 20,
              marginTop: 10,
              marginBottom: 5
            }}
          >
            Ideal Temperature Range:     18° 23° C
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 20 }}>
            Ornamental, not typically eaten
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 25 }}>
            • Ornamental, hardy, and attractive aquaponics fish
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 25 }}>
            • Omnivorous, parasite-resistant, and lives a long time
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
          <Text
            style={{
              fontSize: 12,
              marginLeft: 20,
              marginTop: 10,
              marginBottom: 5
            }}
          >
            Ideal Temperature Range:     20° – 24° C
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 20 }}>
            Ornamental, not typically eaten
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 25 }}>
            • Small, hardy aquaponics fish
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 25 }}>
            • Produces lots of waste despite its size
          </Text>
        </View>

        <View style={infoContainer}>
          <Text style={infoText}>Crustaceans </Text>
          <View style={imageWrapper}>
            <Image
              source={require("../../../assets/fishes/Crustaceans.jpg")}
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
          <Text
            style={{
              fontSize: 12,
              marginLeft: 20,
              marginTop: 10,
              marginBottom: 5
            }}
          >
             Ideal TemperatureRange:
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 25 }}>
             prawns: 28° –31° C,
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 25 }}>
             lobster: 22° – 25° C,
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 25, marginBottom: 5 }}>
             oysters: 24° – 26° C 
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 20 }}>Plate Size in:</Text>
          <Text style={{ fontSize: 12, marginLeft: 20 }}>
            prawns: 6 – 12 Months
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 20 }}>
            lobster: 24 Months
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 20, marginBottom: 5 }}>
            oysters: 24 Months
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 25 }}>• Edible</Text>
          <Text style={{ fontSize: 12, marginLeft: 25 }}>
            • Feed on organic plant matter
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 25 }}>
            • Help to keep your tank clean
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
