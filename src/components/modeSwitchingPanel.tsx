import React, { FC } from 'react';
import styled from 'styled-components';
import { ModeSwithButton } from '../ui/buttons';
import { fontTextMain } from '../theme/globalStyle';

const ModeSwitchingPanelStyle = styled.div`
    width:243px;
    box-sizing: border-box;
    padding: 1px;
    display: flex;
    background-color:#F3F4F6;
    border-radius: 6px;
    ${fontTextMain}
`;

const ModeSwitchingPanel: FC = () => (
  <ModeSwitchingPanelStyle>
    <ModeSwithButton isActive={false} type='Runtime' onClick={(e) => console.log(e)} />
    <ModeSwithButton isActive type='Constructor' onClick={(e) => console.log(e)} />

  </ModeSwitchingPanelStyle>
);
export default ModeSwitchingPanel;
