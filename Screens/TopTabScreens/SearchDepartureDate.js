import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export default class SearchDepartureDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const { selectedStartDate} = this.state;
    // const minDate = new Date(); // Today
    // const maxDate = new Date(2025, 6, 3);
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";

    return (
      <View style={styles.container}>
        <CalendarPicker
          startFromMonday={true}
          todayBackgroundColor="#AAE0B1"
          selectedDayColor="#4EC45E"
          selectedDayTextColor="#FFFFFF"
          onDateChange={this.onDateChange}
        />

        <View>
          <Text>SELECTED START DATE:{startDate}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 1,
  },
});
