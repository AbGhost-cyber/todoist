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
//import { TodoCategorys } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import CategoryGridtile from "../components/CategoryGridTile";
import FontsMapper from "../constants/FontsMapper";
import Screens from "../constants/Screens";

const TodoCategoryScreen = (props) => {
  const currentCategories = useSelector(
    (state) => state.todoCategories.categories
  );
  const renderCategoriesItem = (itemData) => {
    return (
      <CategoryGridtile
        title={itemData.item.title}
        color={itemData.item.tintColor}
        numOfTodos={itemData.item.numOfTodos.length + " Tasks"}
        icon={itemData.item.icon}
        onSelect={() => {
          props.navigation.navigate({ routeName: Screens.TODO_SUB_SCREEN });
        }}
      />
    );
  };
  return (
    <SafeAreaView>
      <Text style={styles.textStyle}>Lists</Text>
      <FlatList
        data={currentCategories}
        renderItem={renderCategoriesItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

TodoCategoryScreen.navigationOptions = (navData) => {
  return {
    headerTransparent: true,
    headerTitle: "",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item iconSize={30} title="Menu" iconName="menu-outline" />
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
});
export default TodoCategoryScreen;
