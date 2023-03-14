import React, { FC } from 'react';
import styled from 'styled-components';
import { TabletMain } from '../theme/globalComponentStyle';
import { fontTextMain } from '../theme/globalStyle';
import { useDispatch, useSelector } from '../services/hooks';

const ResultFieldStyle = styled.div`
margin: 4px;
width: 232px;
height: 52px;
display: flex;
${fontTextMain}
background-color:#F3F4F6;
justify-content: flex-end;
font-weight: 800;
font-size: 36px;
box-sizing: border-box;
align-items: center;
border-radius: 4px;
padding: 4px 8px;
`;
const ResultField: FC = () => {
  const { result } = useSelector((state) => state.calculator);
  return (
    <TabletMain>
      <ResultFieldStyle>
        {result}
      </ResultFieldStyle>
    </TabletMain>
  );
};
export default ResultField;
