import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'filters',
  initialState: {
    keyword: '',
    status: 'All',
    priorities: []
  },
  reducers: {
    keywordChange: (state, action) => {
      state.keyword = action.payload
    },
    stateChange: (state, action) => {
      state.status = action.payload
    },
    prioritiesChange: (state, action) => {
      state.priorities = action.payload
    }
  }
});