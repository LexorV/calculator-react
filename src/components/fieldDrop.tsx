import React, {
  FC, useRef, useState,
} from 'react';
import styled from 'styled-components';
import { useDrop, useDrag } from 'react-dnd';
import { SceneryIcon } from '../ui/icons';
import { fontTextMain } from '../theme/globalStyle';
import { useDispatch, useSelector } from '../services/hooks';
import { DropNumberInbox } from '../store/calculatorDropSlice';
import { setComponents } from '../store/constructorFieldSlice';
import { Card } from './card';

type TFieldDropStyle = {
  isHover:boolean
};
type TdataDrag = {
  data:FC,
  id: number
};
const FieldDropStyle = styled.div<TFieldDropStyle>`
    width: 243px;
    height: 448px;
    border-radius: 6px;
    border: 2px dashed #C4C4C4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.isHover ? '#F0F9FF' : '#FFFFFF')};
;
`;
const HeadingDropText = styled.p`
${fontTextMain}
color:#5D5FEF;
margin-top:12px;
`;
const DropText = styled.p`
${fontTextMain}
font-size: 12px;
margin-top:4px;
`;

const FieldDrop: FC = () => {
  const { components } = useSelector((state) => state.constructorFieldReduser);
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [components1, setcomponents1] = useState<[]>([]);
  const {
    numberInbox,
    tabletOperatorInbox,
    resultField,
    equals,
  } = useSelector((state) => state.calculatorDropSlice);

  const [{ isHover }, dropComponent] = useDrop({
    accept: 'DropField',
    drop(data:FC) {
      // eslint-disable-next-line
      console.log(data);
      const newArrr = [...components];
      // eslint-disable-next-line
      const newId =  components.length >= 0
        ? newArrr.length : 0;
      newArrr.push({ data, id: newId });
      dispatch(setComponents(newArrr));
      // setcomponents(components.push(data))

      // setcomponents(data);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });
  return (
    <FieldDropStyle isHover={isHover} ref={dropComponent}>
      { !numberInbox
    && !tabletOperatorInbox
    && !resultField
    && !equals
     && (
     <>
       <SceneryIcon />
       <HeadingDropText>Перетащите сюда</HeadingDropText>
       <DropText> любой элемент из левой панели </DropText>
     </>
     )}
      <div>
        {components.length > 0 && (components.map((component:TdataDrag, i) => (
          <Card id={component.id} index={i}>
            {component.data}
          </Card>
        )))}
      </div>
    </FieldDropStyle>
  );
};
export default FieldDrop;
