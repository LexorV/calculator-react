/* eslint-disable no-plusplus */
import { Operators } from '../constans/constans';

export const generatorArray = (amount: number) => {
  const newArray = [];
  for (let i = 1; i <= amount; i++) {
    newArray.push(i);
  }
  return newArray;
};
export const calculation = (
  numberOne:number,
  numberTwo:number,
  operator:Operators,
) => {
  switch (operator) {
    case Operators.delete:
      return numberOne / numberTwo;
    case Operators.minus:
      return numberOne - numberTwo;
    case Operators.multiplication:
      return numberOne * numberTwo;
    case Operators.plus:
      return numberOne + numberTwo;
    default:
      return 0;
  }
};
export const checkLastPoint = (number:number | string) => {
  const ArrNumber = String(number).split('');
  return ArrNumber[ArrNumber.length - 1] === '.';
};
