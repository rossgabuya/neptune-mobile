import React from "react";
import { View, Text, Image, ScrollView,TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
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
          <LinearGradient
          colors={['#FFF','#e6faff', '#b3f0ff', '#99ebff', '#80e5ff', '#66e0ff']}
          start={[0, 0]}
          end={[1, 1]}
          style={{ flex: 1, paddingTop: 20 }}>
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

          </LinearGradient>

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
    marginTop: 5,
  }
}
export default Settings;
