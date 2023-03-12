import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import calculatorDropSlice from './calculatorDropSlice';
import constructorFieldReduser from './constructorFieldSlice';

const store = configureStore({
  reducer: {
    constructorFieldReduser,
    calculatorDropSlice,
  },
  middleware: [thunk],
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
