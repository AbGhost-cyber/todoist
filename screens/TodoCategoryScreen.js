import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import screens from "../constants/Screens";
import Colors from "../constants/Colors";
import HeaderButton from "../components/HeaderButton";
import CategoryGridtile from "../components/CategoryGridTile";
import FontsMapper from "../constants/FontsMapper";
import Screens from "../constants/Screens";
import FabButton from "../components/FabButton";
import TodoCategory from "../model/todoCategory";

const TodoCategoryScreen = (props) => {
  const currentCategories = useSelector(
    (state) => state.todoCategories.categories
  );
  const allTodos = useSelector((state) => state.todos.todos);

  const getCatTodoLength = (title) => {
    const categoryTodos = allTodos.filter((item) => item.category === title);
    return title === "All" ? allTodos.length : categoryTodos.length;
  };
  const renderCategoriesItem = (itemData) => {
    return (
      <CategoryGridtile
        title={itemData.item.title}
        color={itemData.item.tintColor}
        numOfTodos={getCatTodoLength(itemData.item.title) + " Tasks"}
        icon={itemData.item.icon}
        onSelect={() => {
          props.navigation.navigate({
            routeName: Screens.TODO_SUB_SCREEN,
            params: {
              category: new TodoCategory(
                itemData.item.id,
                itemData.item.title,
                itemData.item.icon,
                itemData.item.numOfTodos,
                itemData.item.tintColor
              ),
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.textStyle}>Lists</Text>
      <FlatList
        data={currentCategories}
        renderItem={renderCategoriesItem}
        numColumns={2}
      />
      <FabButton style={{ marginEnd: 30 }} />
    </View>
  );
};

TodoCategoryScreen.navigationOptions = (navData) => {
  return {
    headerTransparent: true,
    headerTitle: "",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconSize={30}
          title="Menu"
          iconName="menu-outline"
          color={Colors.colorPrimary}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  textStyle: {
    marginTop: "15%",
    fontSize: 32,
    padding: 10,
    fontFamily: FontsMapper.PRO_SANS_BOLD,
  },
  screen: {
    flex: 1,
    marginTop: 20,
  },
});
export default TodoCategoryScreen;
