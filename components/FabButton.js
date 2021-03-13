import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

import Colors from "../constants/Colors";

const FabButton = (props) => {
  return (
    <FAB
      style={{ ...styles.fab, ...props.style }}
      big
      icon="plus"
      color="white"
      onPress={() => console.log("pressed")}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    backgroundColor: Colors.colorPrimary,
    bottom: 0,
  },
});

export default FabButton;
