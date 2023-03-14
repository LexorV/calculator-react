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
import { DragItem } from '../types/globalType';
import ResultField from './ResultField';
import TabletNumberInbox from './tabletNumberInbox';
import TabletOperatorInbox from './tabletOperatorInbox';
import Equals from './equals';
import { NameComponents } from '../constans/constans';

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
  const { components } = useSelector((state) => state.constructorField);
  const dispatch = useDispatch();
  const {
    numberInbox,
    tabletOperatorInbox,
    resultField,
    equals,
  } = useSelector((state) => state.dropComponentsPostion);
  const checkComponent = (component: NameComponents):ReturnType<FC> => {
    switch (component) {
      case NameComponents.result:
        return (<ResultField />);
      case NameComponents.numbers:
        return (<TabletNumberInbox />);
      case NameComponents.operators:
        return (<TabletOperatorInbox />);
      case NameComponents.equals:
        return (<Equals />);
      default:
        return (<ResultField />);
    }
  };
  const [{ isHover }, dropComponent] = useDrop({
    accept: 'dndField',
    drop(nameComponent: { name:NameComponents }) {
      const newArr = [...components];
      const component = checkComponent(nameComponent.name);
      const newId = components.length >= 0
        ? newArr.length : 0;
      newArr.push({ data: component, id: newId });
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
  return (
    <FieldDropStyle
      isDropComponent={isDropComponent()}
      isHover={isHover}
      ref={dropComponent}>
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
