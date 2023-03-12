import { createGlobalStyle } from 'styled-components';

import InterRegular from './inter/Inter-Regular.ttf';

export const Inter = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: local('inter'),
      url(${InterRegular}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
`;
export default Inter;
