import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FontsMapper from "../constants/FontsMapper";


const TodoItem = (props) => {
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
        <Text style={styles.subText}>{props.title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  parent: {
    justifyContent: "flex-start",
    padding: 10,
  },
  subText: {
    fontFamily: FontsMapper.PRO_SANS,
    fontSize: 16,
    color: "#ccc",
  },
  text: {
    fontFamily: FontsMapper.PRO_SANS_BOLD,
    fontSize: 18,
  },
});

export default TodoItem;
