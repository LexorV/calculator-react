import React, { FC, useRef, MouseEvent } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled from 'styled-components';
import { useDispatch, useSelector } from '../services/hooks';
import { setComponents } from '../store/constructorFieldSlice';
import { DragItem } from '../types/globalType';
import { ComponentBox, WrapComponent } from '../theme/globalComponentStyle';
import { NameComponents } from '../constans/constans';
import {
  ClearNumberInbox,
  ClearTabletOperatorInbox,
  ClearResultField,
  ClearEquals,
} from '../store/calculatorDropSlice';

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
  const handleClick = (event:MouseEvent<HTMLDivElement>) => {
    if (event.detail === 2 && isConstructor) {
      const indexEl = components.findIndex((el) => el.id === id);
      const newArr = [...components];
      newArr.splice(indexEl, 1);
      // eslint-disable-next-line
      switch (components[indexEl].data.type.name) {
        case NameComponents.result:
          dispatch(ClearResultField());
          break;
        case NameComponents.numbers:
          dispatch(ClearNumberInbox());
          break;
        case NameComponents.operators:
          dispatch(ClearTabletOperatorInbox());
          break;
        case NameComponents.equals:
          dispatch(ClearEquals());
          break;
        default:
          dispatch(setComponents([]));
          break;
      }
      dispatch(setComponents(newArr));
    }
  };
  /* eslint-disable */
  return (
    <ComponentBox onClick={handleClick} isDrag={isDragging} ref={ref}>
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
