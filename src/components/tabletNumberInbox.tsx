import React, { FC } from 'react';
import { UniversalButton } from '../ui/buttons';
import { generatorArray } from '../services/helpers';
import { TabletMain } from '../theme/globalComponentStyle';

type Ttest = {
  test?:string
};

const TabletNumberInbox: FC<Ttest> = ({ test }) => {
  const arrayNumber = generatorArray(9); // генератор чисел аргумет количество
  return (
    <TabletMain>
      {
            arrayNumber.map((number) => (
              <UniversalButton
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
TabletNumberInbox.defaultProps = {
  test: 'test',
};
export default TabletNumberInbox;
