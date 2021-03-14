import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";

import Colors from "../constants/Colors";
import FontsMapper from "../constants/FontsMapper";

const TodoItem = (props) => {
  const [isCom, setIsCom] = useState(props.isCompleted);

  const handlePress = useCallback(() => {
    setIsCom((prevState) => !prevState);
  }, [isCom]);

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={handlePress}>
      <View style={styles.parent}>
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {isCom ? (
              <Text style={{ ...styles.text, ...styles.comTask }}>
                {props.title}
              </Text>
            ) : (
              <Text style={{ ...styles.text }}>{props.title}</Text>
            )}
            <Checkbox />
            <Checkbox
              disabled={false}
              color={Colors.colorPrimary}
              status={isCom ? "checked" : "unchecked"}
              onPress={handlePress}
              uncheckedColor="black"
            />
          </View>
          <Text style={styles.subText}>{props.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  comTask: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: "red",
  },
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
