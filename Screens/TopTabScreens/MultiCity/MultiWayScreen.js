import React from "react";
import { View, Text, StyleSheet } from "react-native";
const MultiCityScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Multi City</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default MultiCityScreen;
