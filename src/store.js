// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './features/projects/projectSlice';

export const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});

export default store;
