import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TodoCategoryScreen from "../screens/TodoCategoryScreen";
import TodoSubScreen from "../screens/TodoSubScreen";
import CreateTodoScreen from "../screens/CreateTodoScreen";
import FontsMapper from "../constants/FontsMapper";

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
      headerTitleStyle: {
        fontFamily: FontsMapper.PRO_SANS_BOLD,
        color: "black",
      },
    },
  }
);

export default createAppContainer(TodoScreenNavigator);
