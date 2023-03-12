import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import calculatorDropSlice from './calculatorDropSlice';

const store = configureStore({
  reducer: {
    calculatorDropSlice,
  },
  middleware: [thunk],
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
