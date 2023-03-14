import React, { FC, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled from 'styled-components';
import { useDispatch, useSelector } from '../services/hooks';
import { setComponents } from '../store/constructorFieldSlice';
import { DragItem } from '../types/dragField';
import { ComponentBox, WrapComponent } from '../theme/globalComponentStyle';

interface IcoverComponentDrop {
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
export const CoverComponentDrop: FC<IcoverComponentDrop> = ({ id, index, children }) => {
  const { components, isConstructor } = useSelector((state) => state.constructorField);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const [{ isHover }, drop] = useDrop<
  DragItem,
  void,
  { isHover:boolean }
  >({
    accept: 'constructorComponent',
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
    type: 'constructorComponent',
    item: { id, index },
    canDrag: isConstructor,
    collect: (monitor) => ({
      // eslint-disable-next-line
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));
  /* eslint-disable */
  return (
    <ComponentBox isDrag={isDragging} ref={ref}>
    {isConstructor && (<WrapComponent  />)}
      { isHover && (
      <BoxLine>
        <Square />
      <Line />
      <Square />
      </BoxLine>
      )}
      {children}
    </ComponentBox>
  );
};
/* eslint-disable */
export default CoverComponentDrop;
