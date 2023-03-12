import React, { FC } from 'react';
import { TabletMain } from '../theme/globalComponentStyle';
import { UniversalButton } from '../ui/buttons';

const Equals: FC = () => {
  const test = () => {
    console.log('');
  };
  return (
    <TabletMain>
      <UniversalButton
        isEquals
        height={64}
        width={232}
        value='='
        onClick={test} />
    </TabletMain>
  );
};
export default Equals;
