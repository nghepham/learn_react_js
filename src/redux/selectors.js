import { createSelector } from "@reduxjs/toolkit";

export const keywordSelector = (state) => state.filters.keyword;
export const statusSelector = (state) => state.filters.status;
export const prioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todoListRemainingSelector = createSelector(
  todoListSelector,
  keywordSelector,
  statusSelector,
  prioritiesSelector,
  (todoList, keyword, status, priorities) => {
    return todoList.filter(item => {
      if (status === 'All') {
        return priorities.length
          ? item.name.includes(keyword) && priorities.includes(item.priority) 
          : item.name.includes(keyword)
      }

      return item.name.includes(keyword) && 
      (status === 'Completed' ? item.completed : !item.completed) &&
      (priorities.length ? priorities.includes(item.priority) : true)
    })
  }
);