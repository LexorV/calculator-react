import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import calculatorDropSlice from './calculatorDropSlice';
import constructorFieldReduser from './constructorFieldSlice';
import calculatorStateReduser from './calculatorState';

const store = configureStore({
  reducer: {
    dropComponentsPostion: calculatorDropSlice,
    constructorField: constructorFieldReduser,
    calculator: calculatorStateReduser,
  },
  middleware: [thunk],
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
