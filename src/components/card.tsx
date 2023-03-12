import type { Identifier, XYCoord } from 'dnd-core';
import type { FC } from 'react';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch, useSelector } from '../services/hooks';
import { setComponents } from '../store/constructorFieldSlice';

interface DragItem {
  data: FC
  id: number
}
export interface CardProps {
  id: number
  index: number,
  children: any
}

export const Card: FC<CardProps> = ({ id, index, children }) => {
  const { components } = useSelector((state) => state.constructorFieldReduser);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop<
  DragItem,
  void,
  { handlerId: Identifier | null }
  >({
    accept: 'card',
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.id;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      const newArr = [...components];
      newArr.splice(hoverIndex, 0, newArr.splice(dragIndex, 1)[0]);
      dispatch(setComponents(newArr));
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: () => ({ id, index }),
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));
  return (
    <div ref={ref}>
      {children}
    </div>
  );
};
export default Card;
