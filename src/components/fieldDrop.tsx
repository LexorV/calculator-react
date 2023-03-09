import React, { FC } from 'react';
import styled from 'styled-components';
import { SceneryIcon } from '../ui/icons';
import { fontTextMain } from '../theme/globalStyle';

const FieldDropStyle = styled.div`
    width: 243px;
    height: 448px;
    border-radius: 6px;
    border: 2px dashed #C4C4C4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F0F9FF
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

const FieldDrop: FC = () => (
  <FieldDropStyle>
    <SceneryIcon />
    <HeadingDropText>Перетащите сюда</HeadingDropText>
    <DropText> любой элемент из левой панели </DropText>
  </FieldDropStyle>

);
export default FieldDrop;
