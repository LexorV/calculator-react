import React, { FC } from 'react';
import styled from 'styled-components';
import TabletNumberInbox from './tabletNumberInbox';

const CalculatorDragStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 240px;
`;

const CalculatorDrag: FC = () => (
  <CalculatorDragStyle>
    <TabletNumberInbox />
  </CalculatorDragStyle>
);
export default CalculatorDrag;
