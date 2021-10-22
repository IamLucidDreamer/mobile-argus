import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import Buttons from "../Components/Buttons";

const Screen1 = () => {
  return (
    <View>
      <Image
        style={{ width: 200, height: 200, marginTop: 70, marginBottom: 30 }}
        source={require("../assets/Logo.png")}
      />
      <Buttons />
      <Buttons />
      <Buttons />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F4F5F9",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
