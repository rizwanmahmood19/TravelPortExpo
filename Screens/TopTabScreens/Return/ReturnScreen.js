import React, { Component,useState } from "react";
import { View, Text, TextInput, StyleSheet,SafeAreaView, } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import Counters from "react-native-counters";
import { Checkbox } from "react-native-paper";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  AntDesign
} from "@expo/vector-icons";
//import LottieView from "lottie-react-native";

const ReturnScreen = (props) => {
  const [counter, setCounter] = useState();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);  
  const [checkedEconomy, setEconomy] = React.useState(false);
  const [checkedBussines, setBussines] = React.useState(false);
  const [checkedFirst, setFirst] = React.useState(false);

  const list = ["Islamabad", "Islanbul", "America", "London"];

    return (
      <View>
        <Card>
          <View style={styles.card}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("SearchDep");
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
                  this.props.navigation.navigate("SearchDate");
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
            <View style={{ left: 180 }}>
              <TouchableOpacity>
                <Text style={{ fontSize: 15, alignSelf: "center" }}>
                  Return
                </Text>
                <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                  30.10.2020
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>

        <SafeAreaView style={{ paddingVertical: 15 }}>
          <Text style={{ paddingBottom: 10, left: 15, fontWeight: "500" }}>
            PASSENGERS
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1, height: 1, backgroundColor: "#CBCBCB" }} />
            <View style={{ flex: 1, height: 1, backgroundColor: "#CBCBCB" }} />
          </View>
          <View
            style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}
          >
            <Text style={{ paddingBottom: 10, paddingTop: 10, left: 15 }}>
              Adults (age 12+)
            </Text>
            <View style={{ left: 149 }}>
              <Counters
                max={20}
                buttonStyle={{
                  borderColor: "#333",
                  borderWidth: 2,
                }}
                buttonTextStyle={{
                  color: "#333",
                }}
                countTextStyle={{
                  color: "#333",
                }}
                onChange={(len, type) => {
                  setCounter(len);
                }}
              />
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1, height: 1, backgroundColor: "#CBCBCB" }} />
            <View style={{ flex: 1, height: 1, backgroundColor: "#CBCBCB" }} />
          </View>

          <View
            style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}
          >
            <Text style={{ paddingBottom: 10, paddingTop: 10, left: 15 }}>
              Children (age 2-11)
            </Text>
            <View style={{ left: 132 }}>
              <Counters
                max={20}
                buttonStyle={{
                  borderColor: "#333",
                  borderWidth: 2,
                }}
                buttonTextStyle={{
                  color: "#333",
                }}
                countTextStyle={{
                  color: "#333",
                }}
                onChange={(len, type) => {
                  setCounter(len);
                }}
              />
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1, height: 1, backgroundColor: "#CBCBCB" }} />
            <View style={{ flex: 1, height: 1, backgroundColor: "#CBCBCB" }} />
          </View>

          <View
            style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}
          >
            <Text style={{ paddingBottom: 10, paddingTop: 10, left: 15 }}>
              Infant (Ages 0-1, on lap)
            </Text>
            <View style={{ left: 100 }}>
              <Counters
                max={20}
                buttonStyle={{
                  borderColor: "#333",
                  borderWidth: 2,
                }}
                buttonTextStyle={{
                  color: "#333",
                }}
                countTextStyle={{
                  color: "#333",
                }}
                onChange={(len, type) => {
                  setCounter(len);
                }}
              />
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1, height: 1, backgroundColor: "#CBCBCB" }} />
            <View style={{ flex: 1, height: 1, backgroundColor: "#CBCBCB" }} />
          </View>
        </SafeAreaView>

        <SafeAreaView style={{ paddingVertical: 5 }}>
          <Text style={{ paddingBottom: 10, left: 15, fontWeight: "500" }}>
            CLASSES
          </Text>

          <View
            style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}
          >
            <Text style={{ paddingBottom: 10, paddingTop: 10, left: 15 }}>
              Economy
            </Text>
            <View style={{ left: 270 }}>
              <Checkbox
                color="#1A1A1A"
                uncheckedColor="blue"
                status={checkedEconomy ? "unchecked" : "checked"}
                onPress={() => {
                  setEconomy(!checkedEconomy);
                }}
              />
            </View>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}
          >
            <Text style={{ paddingBottom: 10, paddingTop: 10, left: 15 }}>
              Bussiness
            </Text>
            <View style={{ left: 266 }}>
              <Checkbox
                color="#1A1A1A"
                uncheckedColor="blue"
                status={checkedBussines ? "unchecked" : "checked"}
                onPress={() => {
                  setBussines(!checkedBussines);
                }}
              />
            </View>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}
          >
            <Text style={{ paddingBottom: 10, paddingTop: 10, left: 15 }}>
              First
            </Text>
            <View style={{ left: 303 }}>
              <Checkbox
                color="#1A1A1A"
                uncheckedColor="blue"
                status={checkedFirst ? "unchecked" : "checked"}
                onPress={() => {
                  setFirst(!checkedFirst);
                }}
              />
            </View>
          </View>
        
        </SafeAreaView>
      
      </View>
    );
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

export default ReturnScreen;
