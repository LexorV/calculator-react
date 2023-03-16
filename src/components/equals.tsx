import React, { FC } from 'react';
import { TabletMain } from '../theme/globalComponentStyle';
import { UniversalButton } from '../ui/buttons';
import { calculation, checkAmountNumber } from '../services/helpers';
import { useDispatch, useSelector } from '../services/hooks';
import {
  setNumberOne, setResult,
} from '../store/calculatorState';

const Equals: FC = () => {
  const dispatch = useDispatch();
  const {
    operator, numberOne, numberTwo,
  } = useSelector((state) => state.calculator);
  const accountCalc = () => {
    if (operator && numberOne && numberTwo) {
      const total = calculation(
        Number(numberOne),
        Number(numberTwo),
        operator,
      );
      dispatch(setResult(checkAmountNumber(total)));
      dispatch(setNumberOne(checkAmountNumber(total)));
    }
  };
  return (
    <TabletMain>
      <UniversalButton
        isEquals
        height={64}
        width={232}
        value='='
        onClick={(e) => accountCalc()} />
    </TabletMain>
  );
};
export default Equals;
