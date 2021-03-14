import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import FontsMapper from "../constants/FontsMapper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { addTodo } from "../store/actions/todo";

const CreateTodoScreen = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const saveTodo = useCallback(() => {
    dispatch(addTodo(title, description, category, time));
    props.navigation.goBack();
  }, [title, description, time, category]);

  return (
    <ScrollView>
      <View style={styles.parent}>
        <View style={styles.form}>
          <Text style={styles.label}>What are you planning? 😊</Text>
          <TextInput
            multiline={true}
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.container}>
          <Ionicons
            name="timer-outline"
            size={24}
            color={Colors.colorPrimary}
          />
          <TextInput
            placeholder="Add Date/Time"
            style={styles.subTextInput}
            value={time}
            onChangeText={(text) => setTime(text)}
          />
        </View>
        <View style={styles.container}>
          <Ionicons
            name="document-text-outline"
            size={24}
            color={Colors.colorPrimary}
          />
          <TextInput
            placeholder="Add Note 😎 "
            style={styles.subTextInput}
            multiline={true}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <View style={styles.container}>
          <Ionicons
            name="pricetag-outline"
            size={24}
            color={Colors.colorPrimary}
          />
          <TextInput
            placeholder="Category 😉"
            style={styles.subTextInput}
            value={category}
            onChangeText={(text) => setCategory(text)}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          containerStyle={styles.buttonParent}
          onPress={saveTodo}
        >
          <View>
            <Text style={styles.button}>Create</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
CreateTodoScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "New Task",
    headerTransparent: true,
    headerBackImage: () => null,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconSize={30}
          title="Menu"
          iconName="close-outline"
          color="black"
          onPress={() => {
            navData.navigation.goBack();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  button: {
    fontFamily: FontsMapper.PRO_SANS_BOLD,
    fontSize: 17,
    color: "#ccc",
  },
  buttonParent: {
    elevation: 3,
    backgroundColor: Colors.colorPrimary,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 7,
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  form: {
    width: "100%",
  },
  input: {
    borderBottomWidth: 1,
    paddingHorizontal: 2,
    borderBottomColor: "#ccc",
    height: 80,
  },
  label: {
    fontFamily: FontsMapper.PRO_SANS_BOLD,
  },
  parent: {
    flex: 1,
    margin: 20,
    marginTop: "23%",
  },
  subTextInput: {
    fontFamily: FontsMapper.PRO_SANS_BOLD,
    marginVertical: 5,
    marginStart: 10,
  },
});

export default CreateTodoScreen;
