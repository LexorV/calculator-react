import React, { FC, useRef } from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import TabletNumberInbox from './tabletNumberInbox';
import TabletOperatorInbox from './tabletOperatorInbox';
import { useDispatch, useSelector } from '../services/hooks';
import ResultField from './ResultField';
import Equals from './equals';
import {
  DropNumberInbox,
  DropTabletOperatorInbox,
  DropResultField,
  DropEquals,
} from '../store/calculatorDropSlice';

const CalculatorDragStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 240px;
    align-items: center;
    margin-top: 110px;
`;

const CalculatorDrag: FC = () => {
  const {
    numberInbox,
    tabletOperatorInbox,
    resultField,
    equals,
  } = useSelector((state) => state.calculatorDropSlice);
  const dispatch = useDispatch();
  const ComponentDrag = (
    tab: FC, // Сам React компонент
    isComponent:boolean, // Проверка перенёсся компонент
    dis: any, // Action переноса компонента
  ) => {
    const [, dragRef] = useDrag({
      type: 'DropField',
      item: tab,
      canDrag: !isComponent,
      // eslint-disable-next-line
      end: () => dispatch(dis()),
    });
    return dragRef;
  };
  const TabletOperatorInboxRef = ComponentDrag(
    TabletOperatorInbox,
    tabletOperatorInbox,
    DropTabletOperatorInbox,
  );
  const TabletNumberInboxRef = ComponentDrag(
    TabletNumberInbox,
    numberInbox,
    DropNumberInbox,
  );
  const resultFieldRef = ComponentDrag(
    ResultField,
    resultField,
    DropResultField,
  );
  const EqualsRef = ComponentDrag(
    Equals,
    equals,
    DropEquals,
  );
  return (
    <CalculatorDragStyle>
      <div ref={resultFieldRef}>
        <ResultField />
      </div>
      <div ref={TabletOperatorInboxRef}>
        <TabletOperatorInbox />
      </div>
      <div ref={TabletNumberInboxRef}>
        <TabletNumberInbox test='test' />
      </div>
      <div ref={EqualsRef}>
        <Equals />
      </div>
    </CalculatorDragStyle>
  );
};
export default CalculatorDrag;
