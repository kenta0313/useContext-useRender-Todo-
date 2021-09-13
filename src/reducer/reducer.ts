import { IState, IActions } from "../types/interface";

export const reducer = (state: IState, action: IActions): IState => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false
          }
        ],
        nextTodoId: state.nextTodoId + 1
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
      case "DELETE_TODO":
        return {
          ...state,
          todos: state.todos.filter(todo =>
            todo.id !== action.payload.id
          )
        };
    case "SET_VISIBILITY_FILTER":
      return {
        ...state,
        visibilityFilter: action.payload.filter
      };
    default:
      return state;
  }
};