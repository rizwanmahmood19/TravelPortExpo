import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  Animated,
  FlatList,
  Easing,
  Platform,
  ActivityIndicator,
} from "react-native";
import LottieView from "lottie-react-native";
import Card from "../Components/UI/Card";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../Components/ResponsiveLayout";
import { ListItem, Button, Icon } from "react-native-elements";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const Welcome = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [progress, setprogress] = useState(new Animated.Value(0));
  
  const Details = [
    {
      id: 1,
      image: require("../assets/t5.jpeg"),
    },
    {
      id: 2,
      image: require("../assets/t5.jpeg"),
    },
    {
      id: 3,
      image: require("../assets/t5.jpeg"),
    },
    {
      id: 4,
      image: require("../assets/t5.jpeg"),
    },
    {
      id: 5,
      image: require("../assets/t5.jpeg"),
    },
    {
      id: 6,
      image: require("../assets/t5.jpeg"),
    },
    {
      id: 7,
      image: require("../assets/t5.jpeg"),
    },
    {
      id: 8,
      image: require("../assets/t5.jpeg"),
    },
  ];
  const Details1 = [
    {
      id: 1,
      image: require("../assets/slider/un1.jpeg"),
    },
    {
      id: 2,
      image: require("../assets/slider/un2.jpeg"),
    },
    {
      id: 3,
      image: require("../assets/slider/un3.jpeg"),
    },
    {
      id: 4,
      image: require("../assets/slider/un4.jpeg"),
    },
    {
      id: 5,
      image: require("../assets/slider/un5.jpeg"),
    },
  ];
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderFeatured = ({ item }) => {
    return (
      <View style={styles.outerTextView}>
        <View style={styles.adsPriceOuterView}>
          <TouchableOpacity onPress={() => {}} style={styles.outerViewAds}>
            <Image
              style={{
                width: 170,
                borderRadius: 10,
                height: 160,
                alignSelf: "center",
              }}
              source={require("../assets/t5.jpeg")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderFeatured1 = ({ item }) => {
    return (
      <View style={styles.outerTextView}>
        <View style={styles.adsPriceOuterView}>
          <TouchableOpacity onPress={() => {}} style={styles.outerViewAds}>
            <Image
              style={{
                width: 170,
                borderRadius: 10,
                height: 160,
                alignSelf: "center",
              }}
              source={require("../assets/slider/un1.jpeg")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  useEffect(() => {
    setisLoading(true);
    Animated.timing(progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start();
    setisLoading(false);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <LottieView
          source={require("../assets/AnimationsLoader/128-around-the-world.json")}
          progress={progress}
        />
      </View>
    );
  }
const onChange = (number, type) => {
    console.log(number, type) // 1, + or -
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ top: Platform.OS === "ios" ? 10 : 10, right: 60 }}>
          <Text style={{ fontWeight: "bold", fontSize: 28 }}>Hey there</Text>
          <Text style={{ fontSize: 18 }}>Welcome to Trave Port Airlines</Text>
        </View>

        <View style={styles.container1}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Search");
            }}
            style={styles.searchBar}
          >
            <AntDesign
              style={styles.itemicon}
              name="search1"
              size={20}
              color="black"
            />
            <Text style={styles.itemText}>Find a flight</Text>
          </TouchableOpacity>
        </View>

        <View style={{ right: 75, top: 40 }}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>
            Get inspired for your
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>
            next adventure
          </Text>
        </View>

        <FlatList
          pagingEnabled
          horizontal
          data={Details}
          renderItem={renderFeatured}
          keyExtractor={(item) => item.id.toString()}
          //keyExtractor={item => item.id}
        />

        <View style={{ right: 105, top: 40 }}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>
            Travel like a pro
          </Text>
        </View>

        <FlatList
          pagingEnabled
          horizontal
          data={Details1}
          renderItem={renderFeatured1}
          keyExtractor={(item) => item.id.toString()}
          //keyExtractor={item => item.id}
        />

      </ScrollView>
    </SafeAreaView>
  );
};

Welcome.navigationOptions = (navData) => {
  return {
    headerTitle: " ",
    headerTransparent: true,
    headerTintColor: "black",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1,
    },
  };
};

const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    marginTop: 40,
    top: 10,
  },
  itemText: {
    color: "black",
    fontSize: 18,
    height: 50,
    left: 30,
  },
  itemicon: {
    //margin: 10,
    color: "black",
    fontSize: 24,
    //width: "100%",
    height: 50,
    left: 10,
  },
  searchBar: {
    fontSize: 20,
    flexDirection: "row",
    width: Platform.OS === "ios" ? 350 : 350,
    height: 55,
    backgroundColor: "#E5E8F1",
    borderRadius: 10,
    padding: 20,
  },
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
    alignItems: "center",
    justifyContent: "center",
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
  outerTextView: {
    width: 185,
    marginTop: 60,
  },
  adsName: {
    marginTop: 10,
    marginLeft: 10,
    color: "#000",
    fontSize: 13,
  },
  adsPriceOuterView: {
    flexDirection: "row",
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  adsPrice: {
    color: "#000",
    fontSize: 17,
  },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  content: {
    paddingVertical: 10,
    alignItems: "center",
  },
  title: {
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default Welcome;
