import React, {Component} from 'react';
import {Modal, Image, Text, TouchableHighlight, View, Alert,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'react-native-svg';


class Developers extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  
  render() {
    const { infoText,headText } = styles;
    return (
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
              source={require("../../assets/icons/logoFinal.png")}
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignContent: "center"
              }}
            />
          <Text style={headText}>Neptune</Text>
          <Text style={{fontSize: 12}}>v1.0.0</Text>
          <Text style={{fontSize: 12,marginBottom: 15}}>by</Text>
          <Image
              source={require("../../assets/logo/igen1.jpg")}
              style={{
                height: 80,
                width: 80,
                justifyContent: "center",
                alignContent: "center"
              }}
            />
          <Text style={infoText}>Team I-Gen</Text>
          <Text style={{fontSize: 12, marginBottom:15}}>from</Text>
          <Image
              source={require("../../assets/logo/school1.png")}
              style={{
                height: 80,
                width: 80,
                justifyContent: "center",
                alignContent: "center"
              }}
            />
          <Text style={infoText}>Asian Institute of Computer Studies</Text>
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
          }} style={{fontSize:20}}>
            Neptune <Icon color='#000' name="info-circle" size={25} />
        </Text>
      </View>
    );
  }
}

const styles = {
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
}


export default Developers;
