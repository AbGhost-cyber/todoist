import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BottomSheetLike = (props) => {
  return (
    <View style={{ ...styles.sheet, ...props.style }}>
      {props.children}
      <Text>Hi</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  sheet: {
    height: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 5,
    width: "100%",
    shadowColor: "black",
    backgroundColor: "white",
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default BottomSheetLike;
