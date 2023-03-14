import React, { FC } from 'react';
import { TabletMain } from '../theme/globalComponentStyle';
import { UniversalButton } from '../ui/buttons';

const TabletOperatorInbox: FC = () => {
  const newArray = ['/', '*', '-', '+'];
  return (
    <TabletMain>
      {
            newArray.map((operator) => (
              <UniversalButton
                onClick={(e) => console.log()}
                value={operator}
                key={operator}
                width={52} />
            ))
        }
    </TabletMain>
  );
};
export default TabletOperatorInbox;
