import React, { FC } from 'react';
import styled from 'styled-components';
import TabletNumberInbox from './tabletNumberInbox';
import TabletOperatorInbox from './tabletOperatorInbox';
import { UniversalButton } from '../ui/buttons';

const CalculatorDragStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 240px;
    align-items: center;
`;

const CalculatorDrag: FC = () => (
  <CalculatorDragStyle>
    <TabletOperatorInbox />
    <TabletNumberInbox />
    <UniversalButton
      isEquals
      height={64}
      width={232}
      value='='
      onClick={(e) => console.log()} />
  </CalculatorDragStyle>
);
export default CalculatorDrag;
