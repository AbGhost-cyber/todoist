import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CircleButton = (props) => {
  return (
    <TouchableOpacity style={styles.circle}>
      <Ionicons name={props.iconName} size={23} color={props.color} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  circle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
});

export default CircleButton;
