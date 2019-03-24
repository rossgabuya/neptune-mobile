import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class Notifications extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  showNotifModal(display){
    const { infoText,headText } = styles;
    if(display == 'warning'){
      return(
      <View style={{height:"100%",width: "100%",backgroundColor: "#ffff00"}}>
        <View>
          <Text style={headText}>Warning!</Text>
          <Text style={infoText}>Please make sure your aquaponics is still within maintainable level to gain better production.</Text>
          <Text style={infoText}>> for PH level : 5.9 - 7.5</Text>
          <Text style={infoText}>> for Water volume : 50% - 95%</Text>
          <Text style={infoText}>> for Temperature : 20 - 35 degree Celsius</Text>
            <Button
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
              title="Got It!"
              color="#ff9900"
              accessibilityLabel=""
              style={{marginLeft:25,marginRight:25,marginTop:30}}
            />
        </View>
      </View>
      );
    }else{
      return(
      <View style={{height:"100%",width: "100%",backgroundColor: "#66ff66"}}>
        <View>
          <Text style={headText}>Good Job!</Text>
          <Text style={infoText}>Keep your aquaponics in good health!</Text>
          <Text style={infoText}>> for PH level : 5.9 - 7.5</Text>
          <Text style={infoText}>> for Water volume : 50% - 95%</Text>
          <Text style={infoText}>> for Temperature : 20 - 35 degree Celsius</Text>
            <Button
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
              title="Got It!"
              color="#00cc00"
              accessibilityLabel=""
              style={{marginLeft:"0.3em",marginRight:"0.3em",marginTop:30}}
            />
        </View>
      </View>
      );
    }
  }

  render() {
    const { infoText,headText } = styles;
    let display = this.props.blobProp;
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
         {this.showNotifModal(display)}
        </Modal>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Warnings</Text>
        </TouchableHighlight>
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
    marginTop: "25%",
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


export default Notifications;
