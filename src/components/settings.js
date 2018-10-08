import React from "react";
import { View, Text, Image, ScrollView,TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import { Switch } from "native-base";
import Footer from "./common/footer";


class Settings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      switch1: false,
      switch2: false,

    }
    this.navigation = this.navigation.bind(this);
  }

  navigation(event){
    this.props.navigation.navigate(event.navDestination)
  }

  render() {
    console.log(this.state.switch1);
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

            <TouchableOpacity onPress={ () => {this.setState({ switch2: !this.state.switch2 })} } style={styles.notifContainer}>
              <Text style={styles.Text}> Notification </Text>
              <Switch value={this.state.switch2} onChange={ () => {this.setState({ switch2: !this.state.switch2 })} } />
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => {this.setState({ switch1: !this.state.switch1 })} } style={styles.notifContainer}>
              <Text style={styles.Text}> Grow Light </Text>
              <Switch value={this.state.switch1} onChange={ () => {this.setState({ switch1: !this.state.switch1 })} } />
            </TouchableOpacity>

            <TouchableOpacity style={styles.notifContainer}>
              <Text style={styles.Text}> User Guide </Text>
              <Image source={require('../assets/icons/Userguideicon.png')} style={{ height: 50 , width: 50 }}/>
            </TouchableOpacity>

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
  }
}
export default Settings;
