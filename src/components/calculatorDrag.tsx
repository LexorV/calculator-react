import React, { FC } from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import TabletNumbers from './tabletNumbers';
import TabletOperators from './tabletOperators';
import { useSelector } from '../services/hooks';
import ResultField from './ResultField';
import Equals from './equals';
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
  const { isConstructor } = useSelector((state) => state.constructorField);
  const ComponentDrag = (
    name: NameComponents, // Имя компонента
    isComponent:boolean, // Проверка перенёсся компонент
  ) => {
    const [, dragRef] = useDrag({
      type: 'dndField',
      item: {name},
      canDrag: !isComponent,
    });
    return dragRef;
  };
  const TabletOperatorInboxRef = ComponentDrag(
    NameComponents.operators,
    tabletOperatorInbox,
  );
  const TabletNumberInboxRef = ComponentDrag(
    NameComponents.numbers,
    numberInbox,
  );
  const resultFieldRef = ComponentDrag(
    NameComponents.result,
    resultField,
  );
  const EqualsRef = ComponentDrag(
    NameComponents.equals,
    equals,
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
        <TabletOperators />
      </ComponentBoxDrag>
      <ComponentBoxDrag isDrag={numberInbox} ref={TabletNumberInboxRef}>
        <WrapComponent />
        <TabletNumbers />
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
