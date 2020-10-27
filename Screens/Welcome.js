import React, {useState, useCallback,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Image,
  Animated,
  PanResponder,
} from "react-native";
import Card1 from '../Components/UI/Card';
import {heightPercentageToDP as hp, widthPercentageToDP as wp,} from '../Components/ResponsiveLayout';
import { Card, ListItem, Button, Icon } from "react-native-elements";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const Welcome = (props) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const position = new Animated.ValueXY();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

const Foods = [
  { id: "1", uri: require("../assets/t1.jpeg") },
  { id: "2", uri: require("../assets/t1.jpeg") },
  { id: "3", uri: require("../assets/t1.jpeg") },
  { id: "4", uri: require("../assets/t1.jpeg") },
  { id: "5", uri: require("../assets/t1.jpeg") },
];
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const renderFoods = () => {
  return Foods.map((item, i) => {
    return (
      <Animated.View
        {...this.PanResponder.panHandlers}
        key={item.id}
        style={[
          { transform: position.getTranslateTransform() },
          {
            height: SCREEN_HEIGHT - 120,
            width: SCREEN_WIDTH,
            padding: 10,
            position: "absolute",
          },
        ]}
      >
        <Image
          style={{
            flex: 1,
            height: null,
            width: null,
            resizeMode: "cover",
            borderRadius: 20,
          }}
          source={item.uri}
        />
      </Animated.View>
    );
  });
};

useEffect(() => {
  return () => {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {},
    });
  }
})

  return (
    <ImageBackground source={require("../assets/t6.jpeg")} style={styles.image}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={{ flex: 1 }}>
            <View style={{ height: 60 }}></View>
            <View style={{ flex: 1 }}>{renderFoods}</View>
            <View style={{ height: 60 }}></View>
          </View>

          

          <View style={styles.slide}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("Search");
              }}
            >
              <Card1 style={styles.summary}>
                <Text style={styles.text}>Booking</Text>
              </Card1>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

Welcome.navigationOptions = (navData) => {
  return {
    headerTitle: "Travel Port Airlines",
    headerTransparent: true,
    headerTintColor: "#fff",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1,
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: Platform.OS === "android" ? wp("100%") : wp("100%"),
    height: Platform.OS === "android" ? hp("100%") : hp("100%"),
  },
  scrollView: {
    flex: 1,
    //backgroundColor: 'pink',
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    top: 50,
  },
  summary: {
    padding: 20,
    flexDirection: "row",
    backgroundColor: "#D51D29",
  },
  text: {
    fontSize: 23,
    color: "#FFFF",
  },
});
export default Welcome;
