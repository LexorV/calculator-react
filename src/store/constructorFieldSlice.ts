import React, { FC } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TcomponentCalac = {
  data:FC,
  id:number,
};

type TconstructorField = {
  components:TcomponentCalac[],
};

const initialState: TconstructorField = {
  components: [],
};
const constructorFieldSlice = createSlice({
  name: 'constructorField',
  initialState,
  reducers: {
    setComponents: (state: TconstructorField, action: PayloadAction<TcomponentCalac[]>) => ({
      ...state, components: action.payload,
    }),
  },
});
const constructorFieldReduser = constructorFieldSlice.reducer;
export const { setComponents } = constructorFieldSlice.actions;
export default constructorFieldReduser;
