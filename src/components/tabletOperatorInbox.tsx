import React, { FC } from 'react';
import { TabletMain } from '../theme/globalComponentStyle';
import { UniversalButton } from '../ui/buttons';
import { Operators } from '../constans/constans';
import { useDispatch, useSelector } from '../services/hooks';
import {
  setNumberOne, setNumberTwo, setResult, setOperator, fieldFull,
} from '../store/calculatorState';
import { checkLastPoint } from '../services/helpers';

const TabletOperatorInbox: FC = () => {
  const {
    numberOne, result,
  } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();
  const newArray = [
    Operators.delete,
    Operators.multiplication,
    Operators.minus,
    Operators.plus];
  const sendingOperatorInStore = (oper:Operators) => {
    dispatch(setOperator(oper));
    if (!checkLastPoint(result)) {
      if (!numberOne) {
        dispatch(setNumberOne(result));
        dispatch(fieldFull());
      } else {
        dispatch(setNumberTwo(result));
        dispatch(fieldFull());
      }
    } else {
      dispatch(setResult('error'));
      dispatch(fieldFull());
    }
  };
  return (
    <TabletMain>
      {
            newArray.map((oper) => (
              <UniversalButton
                onClick={(e) => sendingOperatorInStore(oper)}
                value={oper}
                key={oper}
                width={52} />
            ))
        }
    </TabletMain>
  );
};
export default TabletOperatorInbox;
