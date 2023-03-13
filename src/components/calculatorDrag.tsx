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
import { TDndBoxStyle } from '../types/dragField';

const CalculatorDragStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 240px;
    align-items: center;
    margin-top: 110px;
`;
/* eslint-disable */
const ComponentBox = styled.div<TDndBoxStyle>`
 opacity: ${(props) => (props.isDrag ? 0.5 : 1)};
 position: relative;
cursor: ${(props) => (props.isDrag ? 'not-allowed' : 'move')};
`;
/* eslint-disable */
const WrapComponent = styled.div`
  opacity:0;
  position: absolute;
  z-index: 40;
  width:100%;
  height: 100%;
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
      type: 'dndField',
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
      <ComponentBox isDrag={resultField} ref={resultFieldRef}>
        <WrapComponent />
        <ResultField />
      </ComponentBox>
      <ComponentBox isDrag={tabletOperatorInbox} ref={TabletOperatorInboxRef}>
        <WrapComponent />
        <TabletOperatorInbox />
      </ComponentBox>
      <ComponentBox isDrag={numberInbox} ref={TabletNumberInboxRef}>
        <WrapComponent />
        <TabletNumberInbox test='test' />
      </ComponentBox>
      <ComponentBox isDrag={equals} ref={EqualsRef}>
        <WrapComponent />
        <Equals />
      </ComponentBox>
    </CalculatorDragStyle>
  );
};
export default CalculatorDrag;
