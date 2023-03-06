import styled from 'styled-components';
import React, { MouseEventHandler, FC } from 'react';

type TBasicButtonProps = {
  disabled?: boolean;
  width?: number;
  height?: number;
};
type TButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  value?: string | number;
};
const BasicNormalButton = styled.button<TBasicButtonProps>`
width: ${(props) => props.width || 72}px;
height:${(props) => props.height || 48}px;
color: #000000;
background-color: #FFFFFF;
border: 1px solid #E2E3E5;
border-radius: 6px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
`;
export const NumberButton: FC<TButtonProps> = ({ onClick, value, disabled }) => (
  <BasicNormalButton disabled={disabled} onClick={onClick}>{value}</BasicNormalButton>
);
export const NumberButton2: FC<TButtonProps> = ({ onClick, value, disabled }) => (
  <BasicNormalButton disabled={disabled} onClick={onClick}>{value}</BasicNormalButton>
);

NumberButton.defaultProps = {
  value: '',
  disabled: false,
};
NumberButton2.defaultProps = {
  value: '',
  disabled: false,
};
