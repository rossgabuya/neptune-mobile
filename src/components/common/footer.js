import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      navDestination: "",
    }
    this.returnNav = this.returnNav.bind(this);
  }

  returnNav(event){
    this.props.navProps({ navDestination: event })
  }

  render() {
    return(
      <View style={ style.container }>
        <TouchableOpacity onPress={() => { this.returnNav("Home") }} style={ style.navBottomWrapper }>
            <Image
              style={{ height: 40, width: 40 }}
              source={require('../../assets/icons/home-icon.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.returnNav("Water") }} style={ style.navBottomWrapper }>
            <Image
              style={{ height: 40, width: 29 }}
              source={require('../../assets/icons/watericon.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.returnNav("Plant") }} style={ style.navBottomWrapper }>
            <Image
              style={{ height: 40, width: 36 }}
              source={require('../../assets/icons/planticon.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.returnNav("Setting") }} style={ style.navBottomWrapper }>
            <Image
              style={{ height: 48, width: 48 }}
              source={require('../../assets/icons/sicon.png')}
            />
        </TouchableOpacity>
      </View>
    )
  }
}

const style = {
  container: {
    height: 50,
    width: "100%",
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor: "#d9d9d9"
  },
  navBottomWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
}

export default Footer;
