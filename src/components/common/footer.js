import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.returnNav = this.returnNav.bind(this);
  }

  returnNav(event){
    this.props.navProps({ navDestination: event })
  }

  render() {
    return(
      <View style={ style.container }>
        <TouchableOpacity onPress={ () => { this.returnNav("Home") } } style={ style.navBottomWrapper }>
            <Image
              style={{ height: 50, width: 50 }}
              source={require('../../assets/icons/home-icon.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.returnNav("Water") }} style={ style.navBottomWrapper }>
            <Image
              style={{ height: 48, width: 33 }}
              source={require('../../assets/icons/watericon.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.returnNav("Plant") }} style={ style.navBottomWrapper }>
            <Image
              style={{ height: 50, width: 36 }}
              source={require('../../assets/icons/planticon.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.returnNav("Setting") }} style={ style.navBottomWrapper }>
            <Image
              style={{ height: 45, width: 45 }}
              source={require('../../assets/icons/settingicn.png')}
            />
        </TouchableOpacity>
      </View>
    )
  }
}

const style = {
  container: {
    height: 75,
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
