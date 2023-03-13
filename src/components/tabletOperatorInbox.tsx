import React, { FC } from 'react';
import { TabletMain } from '../theme/globalComponentStyle';
import { UniversalButton } from '../ui/buttons';

const TabletOperatorInbox: FC = () => {
  const newArray = ['/', '*', '-', '+'];
  return (
    <TabletMain>
      {
            newArray.map((number) => (
              <UniversalButton
                onClick={(e) => console.log()}
                value={number}
                width={52} />
            ))
        }
    </TabletMain>
  );
};
export default TabletOperatorInbox;
