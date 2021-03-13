import React, { useState, useCallback, useEffect, useRef } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { FAB } from "react-native-paper";
import { useSelector } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import FabButton from "../components/FabButton";
import Colors from "../constants/Colors";
import BottomSheetLike from "../components/BottomSheetLike";
import CircleButton from "../components/CircleButton";
import navMapper from "../constants/navigatorItemsMapper";
import FontsMapper from "../constants/FontsMapper";
import TodoItem from "../components/TodoItem";

const TodoSubScreen = (props) => {
  
  let isAllCat = false;
  const category = props.navigation.getParam(navMapper.CATEGORY);
  const allTodos = useSelector((state) => state.todos.todos);
  const categoryTodo = allTodos.filter(
    (item) => item.category === category.title
  );
  const getCatTodoLength = useCallback(
    (title) => {
      if (title === "All") {
        isAllCat = true;
        return allTodos.length;
      } else {
        //setIsAllCat(false);
        return categoryTodo.length;
      }
    },
    [isAllCat]
  );
  const todosLength = getCatTodoLength(category.title);
  const renderItem = (title) => {
    return <TodoItem title={title} />;
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <CircleButton iconName={category.icon} color={category.tintColor} />
        <Text style={styles.cat}>{category.title}</Text>
        <Text style={styles.subText}>
          {todosLength + (todosLength === 1 ? " Task" : " Tasks")}
        </Text>
      </View>
      <BottomSheetLike>
        <FlatList
          data={isAllCat ? allTodos : categoryTodo}
          renderItem={(itemData) => <TodoItem title={itemData.item.title} />}
        />
      </BottomSheetLike>
      <FabButton style={{ margin: 20 }} />
    </View>
  );
};

TodoSubScreen.navigationOptions = (navData) => {
  return {
    headerTransparent: true,
    headerTitle: "",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconSize={23}
          title="Menu"
          iconName="ellipsis-vertical-outline"
          color="white"
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  cat: {
    fontFamily: FontsMapper.PRO_SANS_BOLD,
    fontSize: 30,
    color: "white",
    marginTop: 10,
  },
  container: {
    justifyContent: "flex-start",
    marginTop: "15%",
    padding: 50,
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.colorPrimary,
  },
  subText: {
    fontFamily: FontsMapper.PRO_SANS,
    fontSize: 18,
    color: "#ccc",
  },
});
export default TodoSubScreen;
