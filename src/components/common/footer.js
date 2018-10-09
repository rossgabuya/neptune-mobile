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
    const { container, navBottomWrapper } = styles;
    const { navBottomWrapperActive } = activeStyle;
    return(
      <View style={ container }>
        <TouchableOpacity onPress={ () => { this.returnNav("Home") } } style={this.props.activeRoute === "Home" ? navBottomWrapperActive : navBottomWrapper }>
            <Image
              style={{ height: 40, width: 40 }}
              source={require('../../assets/icons/home-icon.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.returnNav("Water") }} style={this.props.activeRoute === "Water" ? navBottomWrapperActive : navBottomWrapper }>
            <Image
              style={{ height: 40, width: 29 }}
              source={require('../../assets/icons/watericon.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.returnNav("Plant") }} style={this.props.activeRoute === "Plant" ? navBottomWrapperActive : navBottomWrapper }>
            <Image
              style={{ height: 40, width: 36 }}
              source={require('../../assets/icons/planticon.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.returnNav("Setting") }} style={this.props.activeRoute === "Setting" ? navBottomWrapperActive : navBottomWrapper }>
            <Image
              style={{ height: 40, width: 40 }}
              source={require('../../assets/icons/sicon.png')}
            />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  container: {
    height: 50,
    width: "100%",
    backgroundColor: "#fff",
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
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
  }
}

const activeStyle = {
  navBottomWrapperActive: {
    ...styles.navBottomWrapper,
    backgroundColor: "#f2f2f2",
  }
}

export default Footer;
