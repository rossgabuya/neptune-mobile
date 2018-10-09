import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";

import Growth from "./subpages/plant/growth";
import Moisture from "./subpages/plant/moisture";
import DateCalendar from "./subpages/plant/date";
import Footer from "./common/footer";


class Plant extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: "growth"
    }
    this.navigation = this.navigation.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  static navigationOptions = {
    header:null
  };

  navigation(event){
    this.props.navigation.navigate(event.navDestination)
  }

  renderPage(){
    if(this.state.activeTab === "growth"){
      return(
        <View style={{ flex: 1 }}>
          <Growth />
        </View>
      );
    }
    if(this.state.activeTab === "moisture"){
      return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Moisture />
        </View>
      );
    }

    return(
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <DateCalendar />
      </View>
    );

  }

  render() {
    const { buttonStyle, titleHeader } = style;
    const { buttonStyleActive } = activeStyle;
    return(
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#FFF','#e6faff', '#b3f0ff', '#99ebff', '#80e5ff', '#66e0ff']}
          start={[0, 0]}
          end={[1, 1]}
          style={{ flex: 1 }}>
            <View style={{ justifyContent: "center",  width: "100%", height:60, backgroundColor: "#fff"  , flexDirection: "row"}}>
                <TouchableOpacity style={ this.state.activeTab === "growth" ?
                                  buttonStyleActive : buttonStyle
                                  }
                                  onPress={ () => {
                                    this.setState({ activeTab: "growth" }) }
                                  }>
                  <Text> Growth</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ this.state.activeTab === "moisture" ?
                                  buttonStyleActive : buttonStyle
                                  }
                                  onPress={ () => {
                                    this.setState({ activeTab: "moisture" }) }
                                  }>
                  <Text> Moisture</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ this.state.activeTab === "date" ?
                                  buttonStyleActive : buttonStyle
                                  }
                                  onPress={ () => {
                                    this.setState({ activeTab: "date" }) }
                                  }>
                  <Text> Date</Text>
                </TouchableOpacity>
            </View>

            {this.renderPage()}

            <Footer navProps={this.navigation} activeRoute={this.props.navigation.state.routeName}/>
        </LinearGradient>
      </View>
    )
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
    justifyContent: "center" ,
    alignItems: "center",
    width: "100%", height:50
  }
}

const activeStyle = {
  buttonStyleActive: {
    ...style.buttonStyle,
    backgroundColor: "#f2f2f2",
  }
}

export default Plant;
