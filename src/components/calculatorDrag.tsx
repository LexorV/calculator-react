import React, { FC } from 'react';
import styled from 'styled-components';
import TabletNumberInbox from './tabletNumberInbox';
import TabletOperatorInbox from './tabletOperatorInbox';
import { UniversalButton } from '../ui/buttons';
import { TabletMain } from '../theme/globalComponentStyle';

const CalculatorDragStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 240px;
    align-items: center;
`;
const ResultField = styled.div`
margin: 4px;
width: 232px;
height: 52px;
display: flex;
background-color:#F3F4F6;
justify-content: flex-end;
font-weight: 800;
font-size: 36px;
box-sizing: border-box;
align-items: center;
border-radius: 4px;
padding: 4px 8px;
`;

const CalculatorDrag: FC = () => (
  <CalculatorDragStyle>
    <TabletMain>
      <ResultField>
        1
      </ResultField>
    </TabletMain>
    <TabletOperatorInbox />
    <TabletNumberInbox />
    <TabletMain>
      <UniversalButton
        isEquals
        height={64}
        width={232}
        value='='
        onClick={(e) => console.log()} />
    </TabletMain>
  </CalculatorDragStyle>
);
export default CalculatorDrag;
