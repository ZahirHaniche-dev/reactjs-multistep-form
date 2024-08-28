import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './features/sidebarSlice';

export const store = configureStore({
  reducer: {
    sidebarReducer: sidebarReducer,
  },
});
