import styled from 'styled-components';
import { TDndBoxStyle } from '../types/dragField';

export const TabletMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 240px;
    padding: 4px;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0  4px 6px 0 rgba(0, 0, 0, 0.1), 0  2px 4px 0 rgba(0, 0, 0, 0.1);
`;
/* eslint-disable */
export const ComponentBox = styled.div<TDndBoxStyle>`
 opacity: ${(props) => (props.isDrag ? 0.5 : 1)};
 position: relative;
`;
/* eslint-disable */
export const WrapComponent = styled.div`
  opacity:0;
  position: absolute;
  z-index: 40;
  width:100%;
  height: 100%;
  cursor: move;
`;
