// store.js
import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filterSlice';  // Import filtersReducer

const store = configureStore({
  reducer: {
    filters: filtersReducer,  // Add filtersReducer to the Redux store
  },
});

export default store;
