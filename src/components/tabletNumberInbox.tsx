import React, { FC } from 'react';
import styled from 'styled-components';
import { NumberButton } from '../ui/buttons';

const TabletMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const TabletNumberInbox: FC = () => (
  <TabletMain>
    <NumberButton onClick={(e) => console.log()} value={1} />
  </TabletMain>
);
export default TabletNumberInbox;
