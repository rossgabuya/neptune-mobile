import React from "react";
import { View, Text, Image, ScrollView,TouchableOpacity } from "react-native";

import Footer from "./common/footer";


class Settings extends React.Component {
  constructor(props){
    super(props);
    this.navigation = this.navigation.bind(this);
  }

  navigation(event){
    this.props.navigation.navigate(event.navDestination)
  }

  render() {
    return(
      <View style={{ flex: 1 }}>
          <View style={{flex:1 }}>
            <TouchableOpacity style={styles.notifContainer}> 
              <Text style={styles.Text}> User </Text> 
              <Image source={require('../assets/icons/user-icon.png')} style={{ height: 50 , width: 50 }}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.notifContainer}> 
              <Text style={styles.Text}> About </Text> 
              <Image source={require('../assets/icons/Help.png')} style={{ height: 50 , width: 50 }}/>
            </TouchableOpacity>

              <TouchableOpacity style={styles.notifContainer}> 
              <Text style={styles.Text}> Notification </Text> 
            </TouchableOpacity>

              <TouchableOpacity style={styles.notifContainer}> 
              <Text style={styles.Text}> Grow Light </Text> 
  
            </TouchableOpacity>

              <TouchableOpacity style={styles.notifContainer}> 
              <Text style={styles.Text}> User Guide </Text> 
              <Image source={require('../assets/icons/Userguideicon.png')} style={{ height: 50 , width: 50 }}/>
            </TouchableOpacity>

          </View>

          <Footer navProps={this.navigation}/>
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
    backgroundColor:"gray",
    marginTop: 5,

  }

}
export default Settings;
