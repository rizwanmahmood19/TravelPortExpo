import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TravelportNavigations from "./Navigations/TravelportNavigations";
export default function App() {
  return (
    <TravelportNavigations/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
