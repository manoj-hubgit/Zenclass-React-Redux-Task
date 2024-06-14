import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ReduxSlice';


export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});


