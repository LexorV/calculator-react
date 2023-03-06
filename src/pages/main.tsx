import React, {
  FC,
} from 'react';
import styled from 'styled-components';
import CalculatorDrag from '../components/calculatorDrag';

const MainSection = styled.main`
    display: flex;
    justify-content: center;
    gap: 56px;
`;

const Main: FC = () => (
  <MainSection>
    <CalculatorDrag />
  </MainSection>
);
export default Main;
