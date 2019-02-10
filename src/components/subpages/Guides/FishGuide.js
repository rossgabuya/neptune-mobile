import React from 'react';
import {View, ScrollView, Card, Image, Text} from 'react-native';
import { LinearGradient } from "expo";
import Footer from "../../common/footer";

class FishGuide extends React.Component {

  render() {
    return(
      <View style={{ flex: 1 }}>
          <LinearGradient
          colors={['#FFF','#e6faff', '#b3f0ff', '#99ebff', '#80e5ff', '#66e0ff']}
          start={[0, 0]}
          end={[1, 1]}
          style={{ flex: 1 }}>
              <View style={{ justifyContent: "center", alignItems: "center",  width: "100%", height:60, backgroundColor: "#fff"  , flexDirection: "row"}}>
                <Text style={{ fontSize: 24 }}> Fish Guide </Text>
              </View>

              <ScrollView style={{ marginTop: 20, flex: 2 }}>

//tilapia
                    <View style={{ ...styles.notifContainer, flexDirection: "column" }} >
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: "100%" }}>
                          <Text style={{fontSize:30}}> Tilapia </Text>
                        </View>

                       <View style={{ flexDirection: "row" }}>
                          <View style={{flex:1}}>
                              <Image source={require('../../../assets/GuidesPic/Fish/tilapiaImg.jpg')} style={{ height: 50 , width: 80 ,marginTop: 10,marginLeft: 20, marginRight: 20 }}/>
                              <Text style={{ marginTop: 20,marginLeft: 20, marginRight: 20}}>  Plate Size in
                                    – 9 Months
                                      Popular, edible, warm-water aquaponics fish
                                      Easy to breed and fast growing   </Text>
                          </View>
                          <View style={{flex:3}}>
                            <Text style={{ marginTop: 30, marginLeft: 20, marginRight: 20}}>
                              Ideal Temperature Range: 72° -86°F
                              </Text>
                              <Text  style={{ marginTop: 30, marginLeft: 20, marginRight: 20}}>  Tilapia traces its origins back to the Nile River Basin in ancient Egypt. This species of fish is thought to be the oldest farmed fish on earth. Today, Tilapia is still an immensely popular fish to farm in aquaculture. It is also – quite possibly – the most popular aquaponics fish.
                              One drawback to raising tilapia is the need to keep your aquaponics tank warm. Water below 55 degrees will cause tilapia to struggle. A constant water temperature of around 80 degrees is ideal.
                              </Text>
                          </View>
                        </View>
                    </View>
//Trout
                    <View style={{ ...styles.notifContainer, flexDirection: "column" }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: "100%" }}>
                      <Text style={{fontSize:30}}> Trout </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <View style={{flex:1}}>
                          <Image source={require('../../../assets/GuidesPic/Fish/tilapiaImg.jpg')} style={{ height: 50 , width: 80 ,marginTop: 10,marginLeft: 20, marginRight: 20 }}/>
                        <Text style={{ marginTop: 20,marginLeft: 20, marginRight: 20}}>Plate Size in
                                      12 – 16 Months
                                      Edible cold-water fish
                                      Requires pristine water, high dissolved oxygen levels, and
                        </Text>
                      </View>
                      <View style={{flex:3}}>
                        <Text style={{ marginTop: 30, marginLeft: 20, marginRight: 20}}>
                          Ideal Temperature Range: 56° – 68° F

                        </Text>
                        <Text  style={{ marginTop: 30, marginLeft: 20, marginRight: 20}}> This species of fish has a high food conversion ratio and grow quickly, although it may take up to 16 months to fully mature. In addition, trout are a desirable food source, loaded with protein and omega fatty acids.
                        Because trout thrive in cold water, some aquaponics enthusiasts alternate between raising tilapia during warmer months and trout during cooler months. Trout are also a popular aquaponics fish to raise in indoor garages and basements.
                        </Text>
                        </View>
                      </View>
                    </View>

                    <View style={{ ...styles.notifContainer, flexDirection: "column" }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: "100%" }}>
                      <Text style={{fontSize:30}}> Trout </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <View style={{flex:1}}>
                          <Image source={require('../../../assets/GuidesPic/Fish/tilapiaImg.jpg')} style={{ height: 50 , width: 80 ,marginTop: 10,marginLeft: 20, marginRight: 20 }}/>
                        <Text style={{ marginTop: 20,marginLeft: 20, marginRight: 20}}>Plate Size in
                                      12 – 16 Months
                                      Edible cold-water fish
                                      Requires pristine water, high dissolved oxygen levels, and
                        </Text>
                      </View>
                      <View style={{flex:3}}>
                        <Text style={{ marginTop: 30, marginLeft: 20, marginRight: 20}}>
                          Ideal Temperature Range: 56° – 68° F

                        </Text>
                        <Text  style={{ marginTop: 30, marginLeft: 20, marginRight: 20}}> This species of fish has a high food conversion ratio and grow quickly, although it may take up to 16 months to fully mature. In addition, trout are a desirable food source, loaded with protein and omega fatty acids.
                        Because trout thrive in cold water, some aquaponics enthusiasts alternate between raising tilapia during warmer months and trout during cooler months. Trout are also a popular aquaponics fish to raise in indoor garages and basements.
                        </Text>
                        </View>
                      </View>
                    </View>

              </ScrollView >

          </LinearGradient>

          <Footer navProps={this.navigation} activeRoute={this.props.navigation.state.routeName}/>
      </View>
    )
  }
}


const styles= {
  Text:{
    flex:1,
    height:50,
    fontSize: 33,
  },
  notifContainer:{
    flexDirection: "row",
    marginTop: 10,
    backgroundColor:"#fff",
    borderRadius: 10,
    marginTop:8,
    paddingBottom:10,

  }
}

export default FishGuide;
