import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import TodoNavigator from "./navigator/TodoNavigator";
import todoReducer from "./store/reducers/todo";
import cartTodoReducers from "./store/reducers/category";

enableScreens();

const rootReducers = combineReducers({
  todos: todoReducer,
  todoCategories: cartTodoReducers,
});
const store = createStore(rootReducers);

const fetchFonts = () => {
  return Font.loadAsync({
    "product-sans": require("./assets/font/ProductSans-Regular.ttf"),
    "product-sans-bold": require("./assets/font/ProductSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontIsLoaded, setFontIsLoaded] = useState(false);

  if (!fontIsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontIsLoaded(true)}
        onError={console.log("an error occured")}
      />
    );
  }
  return (
    <Provider store={store}>
      <TodoNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
