import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class SearchDeparture extends Component {
  state = {
    search: "",
  };

  filterList(list) {
    return list.filter((listItem) =>
      listItem.toLowerCase().includes(this.state.search.toLowerCase())
    );
  }

  render() {
    const list = ["Islamabad", "Islanbul", "America", "London"];

    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(search) => this.setState({ search })}
          style={styles.searchBar}
          placeholder="Choose your destination"
        />
        {this.filterList(list).map((listItem, index) => (
          <TouchableOpacity onPress={() => {}}>
            <Text key={index} style={styles.itemText}>
              {listItem}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'black',
    alignItems: "center",
    height: "100%",
  },
  searchBar: {
    fontSize: 20,
    margin: 10,
    width: "90%",
    height: 50,
    backgroundColor: "white",
  },
  itemText: {
    margin: 10,
    color: "black",
    fontSize: 24,
    //backgroundColor: 'blue',
    width: "100%",
    height: 50,
  },
});

export default SearchDeparture;
