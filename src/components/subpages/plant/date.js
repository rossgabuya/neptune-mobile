import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { Calendar } from 'react-native-calendars';

class DateCalendar extends Component {
  render(){
    return(
      <View>
        <Calendar
          current={'2018-09-17'}
          markedDates={
          {'2018-09-17': {textColor: '#000'},
          '2018-09-18': { color: '#f2f2f2' },
          '2018-09-02': {color: '#f2f2f2'},
          '2018-09-08': {color: '#f2f2f2'},
          '2018-09-20': {color: '#f2f2f2'},
          '2018-09-30': {color: '#f2f2f2'},
          }}
          markingType={'period'}
          onDayPress={day => {
            console.log('selected day', day);
          }}
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          hideArrows={true}
          hideExtraDays={true}
          disableMonthChange={true}
          firstDay={1}
          style={{ height: "100%" }}
        />
      </View>
    );
  }
}

export default DateCalendar;

// minDate={'2018-09-14'}
// maxDate={'2018-09-28'}

// markedDates={
// {'2018-09-17': {textColor: 'green'},
// '2018-09-18': {startingDay: true, color: 'green'},
// '2018-09-20': {endingDay: true, color: 'green', textColor: 'gray'},
// }}
