import React, { FC } from 'react';
import styled from 'styled-components';
import { ModeSwithButton } from '../ui/buttons';
import { fontTextMain } from '../theme/globalStyle';
import { useDispatch, useSelector } from '../services/hooks';
import {
  constructorEnable,
  constructorDisable,
  setComponents,
} from '../store/constructorFieldSlice';
import { clearCalculator } from '../store/calculatorState';
import {
  DefaultComponents,
} from '../store/calculatorDropSlice';

const ModeSwitchingPanelStyle = styled.div`
    width:243px;
    box-sizing: border-box;
    padding: 1px;
    display: flex;
    background-color:#F3F4F6;
    border-radius: 6px;
    ${fontTextMain}
`;

const ModeSwitchingPanel: FC = () => {
  const { isConstructor } = useSelector((state) => state.constructorField);
  const dispatch = useDispatch();
  const constructorActive = () => {
    dispatch(constructorEnable());
    dispatch(clearCalculator());
    dispatch(setComponents([]));
    dispatch(DefaultComponents());
  };
  return (
    <ModeSwitchingPanelStyle>
      <ModeSwithButton
        isActive={!isConstructor}
        type='Runtime'
        onClick={(e) => dispatch(constructorDisable())} />
      <ModeSwithButton
        isActive={isConstructor}
        type='Constructor'
        onClick={(e) => constructorActive()} />

    </ModeSwitchingPanelStyle>
  );
};
export default ModeSwitchingPanel;
