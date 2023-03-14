import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TcalculatorState = {
  result: number | string

};

const initialState: TcalculatorState = {
  result: 0,
};

const calculatorStateSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setResult: (state: TcalculatorState, action: PayloadAction<number | string>) => ({
      ...state, result: action.payload,
    }),
  },
});
const calculatorStateReduser = calculatorStateSlice.reducer;
export const {
  setResult,
} = calculatorStateSlice.actions;
export default calculatorStateReduser;
