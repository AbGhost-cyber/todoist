import React from "react";
import { View, StyleSheet, Text } from "react-native";

const CreateTodoScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Create Todo Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateTodoScreen;
