import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Platform,
} from "react-native";
import FontsMapper from "../constants/FontsMapper";
import { Ionicons } from "@expo/vector-icons";

const CategoryGridtile = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp
        style={{ flex: 1 }}
        activeOpacity={0.8}
        onPress={props.onSelect}
      >
        <View style={styles.container}>
          <Ionicons
            size={35}
            name={props.icon}
            color={props.color}
            style={{ marginBottom: 10 }}
          />
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
          <Text style={styles.numTodos} numberOfLines={2}>
            {props.numOfTodos}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 1, height: 6 },
    shadowRadius: 10,
    backgroundColor: "white",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: FontsMapper.PRO_SANS_BOLD,
    fontSize: 19,
    textAlign: "right",
  },
  numTodos: {
    fontFamily: FontsMapper.PRO_SANS,
    fontSize: 16,
    textAlign: "right",
    color: "#ccc",
  },
});

export default CategoryGridtile;
