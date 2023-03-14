import React, { FC } from 'react';
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
import { ComponentBox } from '../theme/globalComponentStyle';
import { NameComponents } from '../constans/constans';

const CalculatorDragStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 240px;
    align-items: center;
    margin-top: 110px;
`;
/* eslint-disable */
const ComponentBoxDrag = styled(ComponentBox)`
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
  } = useSelector((state) => state.dropComponentsPostion);
  const dispatch = useDispatch();
  const { isConstructor } = useSelector((state) => state.constructorField);
  const ComponentDrag = (
    name: NameComponents, // Сам React компонент
    isComponent:boolean, // Проверка перенёсся компонент
    dis: any, // Action переноса компонента
  ) => {
    const [, dragRef] = useDrag({
      type: 'dndField',
      item: {name},
      canDrag: !isComponent,
      end: () => dispatch(dis()),
    });
    return dragRef;
  };
  const TabletOperatorInboxRef = ComponentDrag(
    NameComponents.operators,
    tabletOperatorInbox,
    DropTabletOperatorInbox,
  );
  const TabletNumberInboxRef = ComponentDrag(
    NameComponents.numbers,
    numberInbox,
    DropNumberInbox,
  );
  const resultFieldRef = ComponentDrag(
    NameComponents.result,
    resultField,
    DropResultField,
  );
  const EqualsRef = ComponentDrag(
    NameComponents.equals,
    equals,
    DropEquals,
  );
  return (<div>
    {isConstructor && 
    (<CalculatorDragStyle>
      <ComponentBoxDrag isDrag={resultField} ref={resultFieldRef}>
        <WrapComponent />
        <ResultField />
      </ComponentBoxDrag>
      <ComponentBoxDrag isDrag={tabletOperatorInbox} ref={TabletOperatorInboxRef}>
        <WrapComponent />
        <TabletOperatorInbox />
      </ComponentBoxDrag>
      <ComponentBoxDrag isDrag={numberInbox} ref={TabletNumberInboxRef}>
        <WrapComponent />
        <TabletNumberInbox />
      </ComponentBoxDrag>
      <ComponentBoxDrag isDrag={equals} ref={EqualsRef}>
        <WrapComponent />
        <Equals />
      </ComponentBoxDrag>
    </CalculatorDragStyle>)
}
    </div>
  );
};
export default CalculatorDrag;
