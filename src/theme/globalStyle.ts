import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-weight: 500;
    font-size: 14px;
    font-family: Inter;
    margin: 0;
  }
  p {
    margin: 0;
  }
`;
export const fontTextMain = css`
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
`;
export default GlobalStyle;
