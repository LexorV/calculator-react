import React, { FC } from 'react';
import { UniversalButton } from '../ui/buttons';
import { generatorArray } from '../services/helpers';
import { TabletMain } from '../theme/globalComponentStyle';

const TabletNumberInbox: FC = () => {
  const arrayNumber = generatorArray(9); // генератор чисел аргумет количество
  return (
    <TabletMain>
      {
            arrayNumber.map((number) => (
              <UniversalButton
                key={number}
                onClick={(e) => console.log()}
                value={number} />
            ))
        }
      <UniversalButton
        onClick={(e) => console.log(test)}
        value={0}
        width={152} />
      <UniversalButton
        onClick={(e) => console.log()}
        value=',' />
    </TabletMain>
  );
};
export default TabletNumberInbox;
