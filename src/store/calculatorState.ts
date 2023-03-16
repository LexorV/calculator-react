import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Operators } from '../constans/constans';

type TcalculatorState = {
  result: number | string
  operator: null | Operators,
  numberOne:null | number | string,
  numberTwo:null | number | string,
  isFieldClear:boolean

};

const initialState: TcalculatorState = {
  result: 0,
  operator: null,
  numberOne: null,
  numberTwo: null,
  isFieldClear: true,
};

const calculatorStateSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setResult: (state: TcalculatorState, action: PayloadAction<number | string>) => ({
      ...state, result: action.payload,
    }),
    setNumberOne: (state: TcalculatorState, action: PayloadAction<null | number | string>) => ({
      ...state, numberOne: action.payload,
    }),
    setNumberTwo: (state: TcalculatorState, action: PayloadAction<null | number | string>) => ({
      ...state, numberTwo: action.payload,
    }),
    setOperator: (state: TcalculatorState, action: PayloadAction<Operators | null>) => ({
      ...state, operator: action.payload,
    }),
    clearCalculator: (state: TcalculatorState) => ({
      ...state, result: 0, operator: null, numberOne: null, numberTwo: null,
    }),
    fieldFull: (state: TcalculatorState) => ({
      ...state, isFieldClear: false,
    }),
    fieldClear: (state: TcalculatorState) => ({
      ...state, isFieldClear: true,
    }),
  },
});
const calculatorStateReduser = calculatorStateSlice.reducer;
export const {
  setResult,
  setNumberOne,
  setNumberTwo,
  setOperator,
  clearCalculator,
  fieldFull,
  fieldClear,
} = calculatorStateSlice.actions;
export default calculatorStateReduser;
