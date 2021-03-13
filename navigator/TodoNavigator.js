import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TodoCategoryScreen from "../screens/TodoCategoryScreen";
import TodoSubScreen from "../screens/TodoSubScreen";
import CreateTodoScreen from "../screens/CreateTodoScreen";

const TodoScreenNavigator = createStackNavigator(
  {
    CategoryScreen: TodoCategoryScreen,
    TodoSub: TodoSubScreen,
    CreateTodo: CreateTodoScreen,
  },
  {
    defaultNavigationOptions: {
      headerBackTitleVisible: false,
      headerTintColor: "white",
      headerLeftContainerStyle: {
        margin: 10,
        
      },
    },
  }
);

export default createAppContainer(TodoScreenNavigator);
