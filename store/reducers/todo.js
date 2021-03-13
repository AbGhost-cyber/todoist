import { TODOS } from "../../data/dummy-data";

export const initialState = {
  todos: TODOS,
};

export default (state = initialState, action) => {
  return state;
};
