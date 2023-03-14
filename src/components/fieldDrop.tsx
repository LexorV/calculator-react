import React, {
  FC,
} from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { SceneryIcon } from '../ui/icons';
import { fontTextMain } from '../theme/globalStyle';
import { useDispatch, useSelector } from '../services/hooks';
import { setComponents } from '../store/constructorFieldSlice';
import { CoverComponentDrop } from './coverComponentDrop';
import { DragItem } from '../types/dragField';

type TFieldDropStyle = {
  isHover:boolean
  isDropComponent:boolean
};
const FieldDropStyle = styled.div<TFieldDropStyle>`
    width: 243px;
    height: 448px;
    border-radius: 6px;
    border: ${(props) => (props.isDropComponent ? '2px dashed #C4C4C4' : 'none')};
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
const ConstructorBox = styled.div`
  display:flex;
  flex-direction: column;
  gap:5px;
`;

const FieldDrop: FC = () => {
  const { components } = useSelector((state) => state.constructorFieldReduser);
  const dispatch = useDispatch();
  const {
    numberInbox,
    tabletOperatorInbox,
    resultField,
    equals,
  } = useSelector((state) => state.calculatorDropSlice);
  const [{ isHover }, dropComponent] = useDrop({
    accept: 'dndField',
    drop(data:FC) {
      const newArr = [...components];
      const newId = components.length >= 0
        ? newArr.length : 0;
      newArr.push({ data, id: newId });
      dispatch(setComponents(newArr));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });
  const isDropComponent = () => {
    if (!numberInbox
      && !tabletOperatorInbox
      && !resultField
      && !equals) { return true; }
    return false;
  };
    // eslint-disable-next-line
  return (
    <FieldDropStyle isDropComponent={isDropComponent()} isHover={isHover} ref={dropComponent}>
      { isDropComponent()
     && (
     <>
       <SceneryIcon />
       <HeadingDropText>Перетащите сюда</HeadingDropText>
       <DropText> любой элемент из левой панели </DropText>
     </>
     )}
      <ConstructorBox>
        {components.length > 0 && (components.map((component:DragItem, i) => (
          <CoverComponentDrop key={component.id} id={component.id} index={i}>
            {component.data}
          </CoverComponentDrop>
        )))}
      </ConstructorBox>
    </FieldDropStyle>
  );
};
export default FieldDrop;
