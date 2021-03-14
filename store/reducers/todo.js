import { TODOS } from "../../data/dummy-data";
import Todo from "../../model/todo";
import { ADD_TODO } from "../actions/todo";

export const initialState = {
  todos: TODOS,
  completedTodos: TODOS.filter((todo) => todo.isCompleted === true),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = new Todo(
        new Date().toString(),
        action.todoData.title,
        action.todoData.description,
        action.todoData.category,
        action.todoData.time,
        false
      );
      return {
        ...state,
        todos: state.todos.concat(newTodo),
      };
  }
  return state;
};
