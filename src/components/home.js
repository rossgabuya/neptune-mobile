import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from 'expo';


import Footer from "./common/footer";


class Home extends React.Component {
  constructor(props){
    super(props);
    this.navigation = this.navigation.bind(this);
  }

  static navigationOptions = {
    header:null
  };

  navigation(event){
    this.props.navigation.navigate(event.navDestination)
  }

  render() {
    return(
      <LinearGradient
          colors={['#FFF','#e6faff', '#b3f0ff', '#99ebff', '#80e5ff', '#66e0ff']}
          start={[0, 0]}
          end={[1, 1]}
          style={{ flex: 1 }}>
          <View style={{ justifyContent: "center", alignItems: "center",  width: "100%", height:60, backgroundColor: "#fff"  , flexDirection: "row"}}>
            <Text style={{ fontSize: 24 }}> Home </Text>
          </View>
        <ScrollView style={{ flex:1 }}>
         <TouchableOpacity style={styles.notifContainer}>
            <View>
              <Text style={styles.Text}> Growth Photo </Text>
            </View>

            <View>
              <Image source={require('../assets/testplant.jpg')} style={{ height:200, width:"100%" }}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.notifContainer}>
            <View>
              <Text style={styles.Text}> water level is at: </Text>
            </View>

            <View style={{ flexDirection:"row", }}>
              <Image source={require('../assets/icons/waticon.jpg')} style={{ height: 50, width: 50 }}/>
              <Text style={styles.Text}> 10% </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.notifContainer}>
            <View>
              <Text style={styles.Text }> Ph Level Is At: </Text>
            </View>
            <View style={{ flexDirection:'row'}}>
              <Image source={require('../assets/icons/acid-icon.png')} style={{ height:50, width:25,}}/>
              <Text style={styles.Text}> 8.0</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <Footer navProps={this.navigation} activeRoute={this.props.navigation.state.routeName}/>
  </LinearGradient>
    )
  }
}

const styles={
  notifContainer:{
    backgroundColor:"#fff",
    marginTop:8,
    marginLeft:10,
    marginRight:10,
    paddingRight:5,
    paddingLeft:5,
    paddingBottom:10,
    borderRadius: 10
  },
   Text:{
     fontSize:35,
     height:50,

   }
}
export default Home;
