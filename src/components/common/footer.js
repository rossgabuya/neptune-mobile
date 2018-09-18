import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

class Footer extends React.Component {
  render() {
    return(
      <View style={{ height: 75, width: "100%", backgroundColor: "#f2f2f2", flexDirection: "row", justifyContent: "center", alignItems: "center", borderTopWidth: 1, borderStyle: "solid", borderColor: "#d9d9d9" }}>
        <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ height: 50, width: 50 }}
              source={require('../../assets/icons/home-icon.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center"  }}>
            <Image
              style={{ height: 48, width: 32 }}
              source={require('../../assets/icons/watericon.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center"  }}>
            <Image
              style={{ height: 50, width: 36 }}
              source={require('../../assets/icons/planticon.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center"  }}>
            <Image
              style={{ height: 45, width: 45 }}
              source={require('../../assets/icons/settingicn.png')}
            />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Footer;
