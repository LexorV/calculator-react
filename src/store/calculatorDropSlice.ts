import { createSlice } from '@reduxjs/toolkit';

type TcalculatorDropState = {
  numberInbox:boolean,
  tabletOperatorInbox: boolean,
  resultField:boolean,
  equals:boolean,

};

const initialState: TcalculatorDropState = {
  numberInbox: false,
  tabletOperatorInbox: false,
  resultField: false,
  equals: false,
};
const calculatorDropSlice = createSlice({
  name: 'isDropElement',
  initialState,
  reducers: {
    DropNumberInbox: (state: TcalculatorDropState) => ({
      ...state, numberInbox: true,
    }),
    ClearNumberInbox: (state: TcalculatorDropState) => ({
      ...state, numberInbox: false,
    }),
    DropTabletOperatorInbox: (state: TcalculatorDropState) => ({
      ...state, tabletOperatorInbox: true,
    }),
    ClearTabletOperatorInbox: (state: TcalculatorDropState) => ({
      ...state, tabletOperatorInbox: false,
    }),
    DropResultField: (state: TcalculatorDropState) => ({
      ...state, resultField: true,
    }),
    ClearResultField: (state: TcalculatorDropState) => ({
      ...state, resultField: false,
    }),
    DropEquals: (state: TcalculatorDropState) => ({
      ...state, equals: true,
    }),
    ClearEquals: (state: TcalculatorDropState) => ({
      ...state, equals: false,
    }),
    DefaultComponents: (state: TcalculatorDropState) => ({
      ...state,
      equals: false,
      resultField: false,
      tabletOperatorInbox: false,
      numberInbox: false,
    }),
  },
});
const calculatorDropReduser = calculatorDropSlice.reducer;
export const {
  DropNumberInbox,
  ClearNumberInbox,
  DropTabletOperatorInbox,
  ClearTabletOperatorInbox,
  DropResultField,
  ClearResultField,
  DropEquals,
  ClearEquals,
  DefaultComponents,
} = calculatorDropSlice.actions;
export default calculatorDropReduser;
