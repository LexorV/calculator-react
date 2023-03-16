import React, { FC } from 'react';
import { UniversalButton } from '../ui/buttons';
import { generatorArray } from '../services/helpers';
import { TabletMain } from '../theme/globalComponentStyle';
import { useDispatch, useSelector } from '../services/hooks';
import { setResult, fieldClear, setNumberTwo } from '../store/calculatorState';

const TabletNumberInbox: FC = () => {
  const {
    operator, result, isFieldClear,
  } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();
  const pointСheck = (number:string | number) => {
    const even = (el:string) => el === '.';
    return String(number).split('').some(even);
  };
  const sendingNumberInStore = (number:number | string) => {
    if (String(result).length < 11) {
      if (!operator) {
        if (result === 0) {
          dispatch(setResult(String(number)));
        } else {
          dispatch(setResult(String(result) + String(number)));
        }
      } else if (!isFieldClear) {
        dispatch(setResult(String(number)));
        dispatch(fieldClear());
        dispatch(setNumberTwo(String(number)));
      } else {
        const numb = String(result) + String(number);
        dispatch(setResult(numb));
        dispatch(setNumberTwo(numb));
      }
    }
  };
  const sendingPointerInStore = () => {
    if (!pointСheck(result)) {
      dispatch(setResult(String(result) + String('.')));
    }
  };
  const arrayNumber = generatorArray(9); // генератор чисел аргумет количество
  return (
    <TabletMain>
      {
            arrayNumber.map((number) => (
              <UniversalButton
                key={number}
                onClick={(e) => sendingNumberInStore(number)}
                value={number} />
            ))
        }
      <UniversalButton
        onClick={(e) => sendingNumberInStore(0)}
        value={0}
        width={152} />
      <UniversalButton
        onClick={(e) => sendingPointerInStore()}
        value=',' />
    </TabletMain>
  );
};
export default TabletNumberInbox;
