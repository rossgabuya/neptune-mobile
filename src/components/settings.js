import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, TouchableHighlight, Alert,Button} from "react-native";
import { LinearGradient } from "expo";
import { Switch } from "antd-mobile-rn";
import Footer from "./common/footer";
import Notifications from "./subpages/notifications";
import Icon from 'react-native-vector-icons/FontAwesome';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch1: false,
      switch2: false,
      modalVisible: false,
    };
    this.navigation = this.navigation.bind(this);
    this.showNotifications = this.showNotifications.bind(this);
    this.compareValues = this.compareValues.bind(this);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  static navigationOptions = {
    header: null
  };

  compareValues(value,max,min){
    if(value >= max || value <= min){
      return false;
    } else {
      return true;
    }
  }

  componentDidMount(){
    fetch("http://104.248.99.34:80/api/v1/water", {
      method: 'get',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.data,
          },
          function() {}
        );

        let result = this.state.dataSource.map((key, index) => key);
        //console.log(result);

        let items = new Object(result[result.length - 1]);
        //console.log(items);
        if( this.compareValues(items.ph, 7.5, 5.9) == true && this.compareValues(items.temp, 36, 19) == true && this.compareValues(items.wl,100,50) == true){
          this.setState({
            notif: "good"
          })
        }else{
          this.setState({
            notif: "warning"
          })
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  navigation(event) {
    this.props.navigation.navigate(event.navDestination);
  }

  showNotifications() {
    if(this.state.switch2 === true){
      return(
        <View>
          <Notifications blobProp={this.state.notif}/>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "#FFF",
            "#e6faff",
            "#b3f0ff",
            "#99ebff",
            "#80e5ff",
            "#66e0ff"
          ]}
          start={[0, 0]}
          end={[1, 1]}
          style={{ flex: 1 }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: 60,
              backgroundColor: "#fff",
              flexDirection: "row"
            }}
          >
            <Text style={{ fontSize: 24 }}> About </Text>
          </View>
          <ScrollView style={{ marginTop: 10, flex: 1 }}>
            {/* <TouchableOpacity style={styles.notifContainer}>
              <Text style={styles.Text}> User </Text>
              <Image
                source={require("../assets/icons/user-icon.png")}
                style={{ height: 50, width: 50 }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.notifContainer}>
              <Text style={styles.Text}> About </Text>
              <Image
                source={require("../assets/icons/fact-Icon.png")}
                style={{ height: 50, width: 50 }}
              />
            </TouchableOpacity> */}

            <TouchableOpacity
              onPress={() => {
                this.setState({ switch2: !this.state.switch2 });
              }}
              style={styles.notifContainer}
            >
              <Text
                style={{
                  flex: 1,
                  flexDirection: "row",
                  fontSize: 24,
                  marginTop: 8,
                  paddingBottom: 10
                }}
              >
                {" "}
                Notification{" "}
              </Text>
              <Switch
                style={{
                  flexDirection: "row",
                  paddingRight: 10,
                  marginTop: 12,
                  marginRight: 15,
                  paddingBottom: 10
                }}
                checked={this.state.switch2}
                onPress={() => {
                  this.setState({ switch2: !this.state.switch2 });
                }}
              />
              {this.showNotifications()}
            </TouchableOpacity>

            {/* <TouchableOpacity
              onPress={() => {
                this.setState({ switch1: !this.state.switch1 });
              }}
              style={styles.notifContainer}
            >
              <Text style={styles.Text}> Grow Light </Text>
              <Switch
                value={this.state.switch1}
                onChange={() => {
                  this.setState({ switch1: !this.state.switch1 });
                }}
              />
            </TouchableOpacity>
         */}
            <View
              style={{
                flex: 1,
                backgroundColor: "#fff",
                flexDirection: "column",
                borderRadius: 10,
                marginTop: 8,
                paddingBottom: 10,
                marginLeft: 10,
                marginRight: 10,
                paddingRight: 5,
                paddingLeft: 5
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{ fontSize: 24, marginTop: 15, paddingBottom: 10 }}
                >
                  About Neptune
                </Text>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 5,
                    marginBottom: 15,
                    marginLeft: 25,
                    marginRight: 25
                  }}
                >
                  Neptune is an application that will give you real time data
                  monitoring where you can easily check your crops by just
                  checking it on your phone and it will send notifications to
                  your device to alert the user whenever there are changes or
                  critical issue happening like high level of ph or changes in
                  temperature.
                </Text>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" , borderColor:'#ddd',borderTopWidth:2}}>
                <View>
                  <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                  <View style={{height:"100%",width: "100%",backgroundColor: "#fff", justifyContent: "center", alignItems: "center"}}>
                  <Image
                        source={require("../assets/icons/logoFinal.png")}
                        style={{
                          height: 100,
                          width: 100,
                          justifyContent: "center",
                          alignContent: "center"
                        }}
                      />
                    <Text style={styles.headText}>Neptune</Text>
                    <Text style={{fontSize: 12}}>v1.0.0</Text>
                    <Text style={{fontSize: 12,marginBottom: 15}}>by</Text>
                    <Image
                        source={require("../assets/logo/igen1.jpg")}
                        style={{
                          height: 80,
                          width: 80,
                          justifyContent: "center",
                          alignContent: "center"
                        }}
                      />
                    <Text style={styles.infoText}>Team I-Gen</Text>
                    <Text style={{fontSize: 12, marginBottom:15}}>from</Text>
                    <Image
                        source={require("../assets/logo/school1.png")}
                        style={{
                          height: 80,
                          width: 80,
                          justifyContent: "center",
                          alignContent: "center"
                        }}
                      />
                    <Text style={styles.infoText}>Asian Institute of Computer Studies</Text>
                    <View style={{marginTop:15}}>
                      <Button
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}
                        title="Close"
                        color="#66e0ff"
                        accessibilityLabel=""
                      />
                      </View>
                      </View>
                  </Modal>
                  <Text
                    onPress={() => {
                      this.setModalVisible(true);
                    }} style={{fontSize:20,color:"#595959"}}>
                      Learn More <Icon color='#000' name="chevron-right" size={20} />
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: "#fff",
                flexDirection: "column",
                borderRadius: 10,
                marginTop: 8,
                paddingBottom: 10,
                marginLeft: 10,
                marginRight: 10,
                paddingRight: 5,
                paddingLeft: 5
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{ fontSize: 24, marginTop: 15, paddingBottom: 10 }}
                >
                  Importance
                </Text>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 5,
                    marginBottom: 15,
                    marginLeft: 25,
                    marginRight: 25
                  }}
                >
                  Aquaponics system is a combines aquatic plants with animal
                  production, it has a special set of water chemistry
                  requirements, and exelent water quality is needed to have a
                  healthy, balanced, functioning Aquaponics system.
                </Text>
              </View>
            </View>
          </ScrollView>
        </LinearGradient>

        <Footer
          navProps={this.navigation}
          activeRoute={this.props.navigation.state.routeName}
        />
      </View>
    );
  }
}

const styles = {
  Text: {
    flex: 1,
    height: 50,
    fontSize: 33
  },
  notifContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 5,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingRight: 5,
    paddingLeft: 5
  },  
  infoContainer: {
    backgroundColor: "#fff",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
    borderRadius: 10
  },
  headText :{
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 32,
    marginLeft: 10,
    marginRight: 10,
    marginTop: "5%",
    paddingLeft: 5,
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold"
  },
  infoText: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingLeft: 5,
    justifyContent: "center",
    textAlign: "center"
  },
  imageWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
};
export default Settings;
