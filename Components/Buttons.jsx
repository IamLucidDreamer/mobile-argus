import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Buttons = () => {
  return (
    <TouchableOpacity style={styles.Btn}>
      <Text style={styles.txt}>Student Portal</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  Btn: {
    width: "90%",
    backgroundColor: "#BA0913",
    color: "#ffffff",
    borderRadius: 6,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  txt: {
    color: "white",
    fontSize: 20,
  },
});
