import React, { FC, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled from 'styled-components';
import { useDispatch, useSelector } from '../services/hooks';
import { setComponents } from '../store/constructorFieldSlice';
import { DragItem, TDndBoxStyle } from '../types/dragField';

export interface CardProps {
  id: number
  index: number,
  children: any
}
const Line = styled.div`
width: 240px;
height: 2px;
background-color: #5D5FEF;
`;
const Square = styled.div`
width: 4px;
height: 4px;
background-color: #5D5FEF;
transform: rotate(45deg);
`;
const BoxLine = styled.div`
  display: flex;
  align-items: center;
`;
/* eslint-disable */
const DndBoxStyle = styled.div<TDndBoxStyle>`
opacity: ${(props) => (props.isDrag ? 0.5 : 1)};;
transition: padding .2s ease-in-out;
cursor: move;
`;
/* eslint-disable */

export const Card: FC<CardProps> = ({ id, index, children }) => {
  const { components } = useSelector((state) => state.constructorFieldReduser);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const [{ isHover }, drop] = useDrop<
  DragItem,
  void,
  { isHover:boolean }
  >({
    accept: 'card',
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
      isHover: monitor.isOver(),
    }),
    drop(item: DragItem) {
      const dragIndex = components.findIndex((el) => el.id === item.id);
      const hoverIndex = index;
      const newArr = [...components];
      newArr.splice(hoverIndex, 0, newArr.splice(dragIndex, 1)[0]);
      dispatch(setComponents(newArr));
    },
  });
  // eslint-disable-next-line
  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: { id, index },
    collect: (monitor) => ({
      // eslint-disable-next-line
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));
  /* eslint-disable */
  return (
    <DndBoxStyle isDrag={isDragging} ref={ref}>
      { isHover && (
      <BoxLine>
        <Square />
      <Line />
      <Square />
      </BoxLine>
      )}
      {children}
    </DndBoxStyle>
  );
};
/* eslint-disable */
export default Card;
