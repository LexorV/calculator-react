import React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TcomponentCalac = {
  data:any,
  id:number,
};

type TconstructorField = {
  components:TcomponentCalac[],
  isConstructor:boolean
};

const initialState: TconstructorField = {
  components: [],
  isConstructor: true,
};
const constructorFieldSlice = createSlice({
  name: 'constructorField',
  initialState,
  reducers: {
    setComponents: (state: TconstructorField, action: PayloadAction<TcomponentCalac[]>) => ({
      ...state, components: action.payload,
    }),
    constructorEnable: (state: TconstructorField) => ({
      ...state, isConstructor: true,
    }),
    constructorDisable: (state: TconstructorField) => ({
      ...state, isConstructor: false,
    }),
  },
});
const constructorFieldReduser = constructorFieldSlice.reducer;
export const {
  setComponents,
  constructorEnable,
  constructorDisable,
} = constructorFieldSlice.actions;
export default constructorFieldReduser;
