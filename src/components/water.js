import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from 'expo';


import Footer from "./common/footer";
import Chart from "./common/chart";

class Water extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:"",
      activeData: "",
      selectedTab: ""
    }
    this.navigation = this.navigation.bind(this);
    this.categoryChoice = this.categoryChoice.bind(this);
  }

  static navigationOptions = {
    header:null
  };

  componentWillMount() {
    const data = {
      PH:[
        { x: "Aug", y: 15.5 },
        { x: "Sept", y: 10 },
        { x: "Nov", y: 7 },
        { x: "Dec", y: 15 },
        { x: "Jan", y: 1 },
        { x: "Feb", y: 9 },
        { x: "March", y: 10 },
        { x: "April", y: 9 },
      ],
      SAL: [
        { x: "Aug", y: 8 },
        { x: "Sept", y: 8 },
        { x: "Nov", y: 5 },
        { x: "Dec", y: 15 },
        { x: "Jan", y: 7 },
        { x: "Feb", y: 10 },
        { x: "March", y: 10 },
        { x: "April", y: 4 },
      ],
      TEMP: [
        { x: "Aug", y: 5 },
        { x: "Sept", y: 3 },
        { x: "Nov", y: 6 },
        { x: "Dec", y: 10 },
        { x: "Jan", y: 7 },
        { x: "Feb", y: 14 },
        { x: "March", y: 10 },
        { x: "April", y: 4 },
      ],
      WL: [
        { x: "Aug", y: 15 },
        { x: "Sept", y: 13 },
        { x: "Nov", y: 10 },
        { x: "Dec", y: 15 },
        { x: "Jan", y: 7 },
        { x: "Feb", y: 10 },
        { x: "March", y: 3 },
        { x: "April", y: 4 },
      ]
    }
    this.setState({ data: data, activeData: data["PH"] })
  }

  navigation(event){
    this.props.navigation.navigate(event.navDestination)
  }

  categoryChoice(event){
    this.setState({ activeData: this.state.data[event], selectedTab: event })
  }

  render() {
    console.log(this.state.activeData);
    return(
      <LinearGradient
          colors={['#FFF','#e6faff', '#b3f0ff', '#99ebff', '#80e5ff', '#66e0ff']}
          start={[0, 0]}
          end={[1, 1]}
          style={{ flex: 1 }}>
            <ScrollView>
              <View style={{ flexDirection: "column" }}>
                <View style={{ justifyContent: "center",  width: "100%", height:60, backgroundColor: "#f2f2f2"  , flexDirection: "row"}}>
                    <TouchableOpacity style={ style.buttonStyle }  onPress={ () => { this.categoryChoice("PH") } }>
                      <Image
                          style={{ height: 35, width: 17 }}
                          source={require('../assets/icons/alkal-icon.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={ style.buttonStyle }  onPress={ () => { this.categoryChoice("SAL") } }>
                        <Image
                          style={{ height: 40, width: 35 }}
                          source={require('../assets/icons/salicon.png')}
                          />
                    </TouchableOpacity>
                    <TouchableOpacity style={ style.buttonStyle }  onPress={ () => { this.categoryChoice("TEMP") } }>
                        <Image
                          style={{ height: 38, width: 32 }}
                          source={require('../assets/icons/tempicon.png')}
                          />
                    </TouchableOpacity>
                    <TouchableOpacity style={ style.buttonStyle }  onPress={ () => { this.categoryChoice("WL") } }>
                        <Image
                          style={{ height: 33, width: 29 }}
                          source={require('../assets/icons/WLcon.png')}
                          />
                    </TouchableOpacity>
                </View>

                <View style={ style.titleHeader }>
                    <Image
                      style={{ height: 33, width: 32, marginRight: 20 }}
                      source={require('../assets/icons/fish-icon.png')}
                    />
                    <Text> Fish tank </Text>
                </View>
                <Chart dataProps={this.state.activeData} />

                <View style={ style.titleHeader }>
                  <Image
                    style={{ height: 33, width: 29, marginRight: 20, marginTop: 30 }}
                    source={require('../assets/icons/drink-water-icon.png')}
                  />
                  <Text> Drinking water </Text>
                </View>
                <Chart dataProps={this.state.activeData} />

              { this.state.selectedTab === "WL" ? 
              ( 
              <View>
                <View style={ style.titleHeader }> 
                  <Image
                    style={{ height: 33, width: 29, marginRight: 20, marginTop: 30 }}
                    source={require('../assets/icons/drink-water-icon.png')}
                  />  
                  <Text> Drinking water </Text>
                </View> 
                <Chart dataProps={this.state.activeData} />
              </View>
              ) : (<View></View>)}

              </View>

            </ScrollView>
          <Footer navProps={this.navigation}/>
      </LinearGradient>
    )
  }
}

const style = {
  buttonStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleHeader: {
    flexDirection: "row",
    justifyContent: "center" ,
    alignItems: "center",
    width: "100%", height:50
  }

}

export default Water;
