import React, { FC, useRef, useState } from 'react';
import styled from 'styled-components';
import { useDrop, useDrag } from 'react-dnd';
import { SceneryIcon } from '../ui/icons';
import { fontTextMain } from '../theme/globalStyle';
import { TabletMain } from '../theme/globalComponentStyle';
import { useDispatch, useSelector } from '../services/hooks';
import { DropNumberInbox } from '../store/calculatorDropSlice';

type TFieldDropStyle = {
  isHover:boolean
};
type TdataDrag = {
  data:FC,
  index: number
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
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [components, setcomponents] = useState<any[]>([]);
  const [components1, setcomponents1] = useState<[]>([]);
  const { numberInbox } = useSelector((state) => state.calculatorDropSlice);
  const [{ isHover }, dropComponent] = useDrop({
    accept: 'DropField',
    drop(data:FC) {
      // eslint-disable-next-line
      console.log(data);
      // eslint-disable-next-line
       components.push({data: data, index:
       components.length > 0
         ? components.length - 1 : 0,
      });
      // setcomponents(components.push(data))

      // setcomponents(data);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });
  /*
  const [{ isDrag }, dragRef] = useDrag({
    type: 'ingredientInConstructior',
    item:
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  }); */
  /*
  const [{}, dropIngred] = useDrop({
    accept: 'ingredientInConstructior',
    drop(data: any) {

    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  }); */

  return (
    <FieldDropStyle isHover={isHover} ref={dropComponent}>
      <SceneryIcon />
      <HeadingDropText>Перетащите сюда</HeadingDropText>
      <DropText> любой элемент из левой панели </DropText>
      <>
        <div> </div>
        {components.length > 0 && (components.map((component:FC) => (
          component.data
        )))}
      </>
    </FieldDropStyle>
  );
};
export default FieldDrop;
