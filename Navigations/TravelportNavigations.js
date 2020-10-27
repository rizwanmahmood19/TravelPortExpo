import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Welcome from "../Screens/Welcome";
import ReturnScreen from "../Screens/TopTabScreens/Return/ReturnScreen";
import OneWayScreen from "../Screens/TopTabScreens/OneWay/OneWayScreen";
import MultiCityScreen from "../Screens/TopTabScreens/MultiCity/MultiWayScreen";
import SearchDateScreen from "../Screens/TopTabScreens/SearchDateScreen";
import SearchDeparture from "../Screens/TopTabScreens/SearchDeparture";
import SearchDepartureDate from "../Screens/TopTabScreens/SearchDepartureDate";

const ReturnNavigations = createStackNavigator({
  Return1: ReturnScreen,
  SearchDate: SearchDateScreen,
  SearchDep: SearchDeparture,
  SearchOneWayDate : SearchDepartureDate,
});

const OneWayNavigations = createStackNavigator({
  OneWay1: OneWayScreen,
  SearchDep: SearchDeparture,
  SearchOneWayDate: SearchDepartureDate,
});

const Tabs = createMaterialTopTabNavigator({
  Return: ReturnNavigations,
  OneWay: OneWayNavigations,
  MultiWay: MultiCityScreen,
  // },
  // {
  //   defaultNavigationOptions: {
  //     headerTitle: "Travel Port Airlines",
  //     title: "Centered",
  //     headerTitleAlign: "center",
  //   },
});

const TravelportNavigations = createStackNavigator({
  Welcome: Welcome,
  Search: Tabs,
});
const DrawerNavigator = createDrawerNavigator(
  {
    Home: TravelportNavigations,
  }
);

export default createAppContainer(DrawerNavigator);
