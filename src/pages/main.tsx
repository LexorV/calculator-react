import React, {
  FC,
} from 'react';
import styled from 'styled-components';
import FieldDrop from '../components/fieldDrop';
import CalculatorDrag from '../components/calculatorDrag';
import ModeSwitchingPanel from '../components/modeSwitchingPanel';

const MainSection = styled.main`
    display: flex;
    justify-content: center;
    gap: 56px;
`;
const DropSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Main: FC = () => (
  <MainSection>
    <CalculatorDrag />
    <DropSection>
      <ModeSwitchingPanel />
      <FieldDrop />
    </DropSection>
  </MainSection>
);
export default Main;
