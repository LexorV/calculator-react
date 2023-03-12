import React, { FC, useRef } from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import { ThunkAction } from '@reduxjs/toolkit';
import TabletNumberInbox from './tabletNumberInbox';
import TabletOperatorInbox from './tabletOperatorInbox';
import { UniversalButton } from '../ui/buttons';
import { TabletMain } from '../theme/globalComponentStyle';
import { fontTextMain } from '../theme/globalStyle';
import { useDispatch, useSelector } from '../services/hooks';
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
const ResultField = styled.div`
margin: 4px;
width: 232px;
height: 52px;
display: flex;
background-color:#F3F4F6;
justify-content: flex-end;
font-weight: 800;
font-size: 36px;
box-sizing: border-box;
align-items: center;
border-radius: 4px;
padding: 4px 8px;
${fontTextMain}
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
    TabletOperatorInbox,
    resultField,
    DropResultField,
  );
  const test = () => {
    dispatch(DropNumberInbox());
    console.log(numberInbox);
  };

  return (
    <CalculatorDragStyle>
      <TabletMain>
        <ResultField>
          1
        </ResultField>
      </TabletMain>
      <div ref={TabletOperatorInboxRef}>
        <TabletOperatorInbox />
      </div>
      <div ref={TabletNumberInboxRef}>
        <TabletNumberInbox test='test' />
      </div>
      <TabletMain>
        <UniversalButton
          isEquals
          height={64}
          width={232}
          value='='
          onClick={test} />
      </TabletMain>
    </CalculatorDragStyle>
  );
};
export default CalculatorDrag;
