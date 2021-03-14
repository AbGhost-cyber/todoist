export const ADD_TODO = "ADD_TODO";
export const UDPATE_TODO = "UPDATE_TODO";

export const addTodo = (title, description, category, time, isCompleted) => {
  return {
    type: ADD_TODO,
    todoData: {
      title,
      description,
      category,
      time,
    },
  };
};
export const updateTodo = (
  id,
  title,
  description,
  category,
  time,
  isCompleted
) => {
  return {
    type: ADD_TODO,
    todoId: id,
    todoData: {
      title,
      description,
      category,
      time,
      isCompleted,
    },
  };
};
