import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../components/Filters/filterSlice";
import todoListSlide from "../components/TodoList/todoListSlide";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlide.reducer,
  }
});

export default store;