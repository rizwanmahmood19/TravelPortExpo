import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  AntDesign
} from "@expo/vector-icons";
//import LottieView from "lottie-react-native";

class OnewayScreen extends Component {
  render() {
    const list = ["Islamabad", "Islanbul", "America", "London"];

    return (
      <View>
        <Card>
          <View style={styles.card}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("SearchOneWayDate");
                }}
              >
                <Text style={{ fontSize: 25, alignSelf: "center" }}>ISB</Text>
                <Text style={{ fontSize: 10 }}>
                  Islamabad International {"\n"} Airport, Islamabad
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.icon}>
              <Ionicons name="ios-airplane" size={24} color="black" />
            </View>
            <View style={{ paddingLeft: "26%" }}>
              <Text style={{ fontSize: 25, alignSelf: "center" }}>ISB</Text>
              <Text style={{ fontSize: 10 }}>
                Islamabad International {"\n"} Airport, Islamabad
              </Text>
            </View>
          </View>
        </Card>
        <Card>
          <View style={styles.card}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("SearchOneWayDate");
                }}
              >
                <Text style={{ fontSize: 15, alignSelf: "center" }}>
                  Departure
                </Text>
                <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                  21.10.2020
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.icondate}>
              <AntDesign name="calendar" size={24} color="black" />
            </View>
            
          </View>
        </Card>
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
  card: {
    flexDirection: "row",
  },
  icon: {
    left: "90%",
    justifyContent: "center",
  },
  icondate: {
    left: "250%",
    justifyContent: "center",
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

export default OnewayScreen;
