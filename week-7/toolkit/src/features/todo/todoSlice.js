import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello", done: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload, done: false };
      state.todos = [...state.todos, todo];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id == action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
    updateTodo: (state, action) => {
      console.log(action);
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
