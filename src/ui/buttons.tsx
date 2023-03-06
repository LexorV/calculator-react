/* eslint-disable */
import styled from 'styled-components';
import React, { MouseEventHandler, FC } from 'react';

type TBasicButtonProps = {
  disabled?: boolean;
  width?: number;
  height?: number;
  isEquals?: boolean;
};
type TButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  value?: string | number;
  width?: number;
  isEquals?: boolean;
  height?: number;
};
const BasicNormalButton = styled.button<TBasicButtonProps>`
width: ${(props) => props.width || 72}px;
height:${(props) => props.height || 48}px;
color: ${(props) => (props.isEquals ? '#FFFFFF' : '#000000')};
border: 1px solid #E2E3E5;
border-radius: 6px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
// eslint-disable-next-line
background-color: ${(props) => (props.isEquals ? '#5D5FEF' : '#FFFFFF')};
`;
const EqualsButton = styled(BasicNormalButton)`
    color: white;
    background-color: #5D5FEF; 
`;

export const UniversalButton: FC<TButtonProps> = ({
  onClick, value, disabled, width, isEquals, height
}) => (
  <BasicNormalButton
    isEquals={isEquals}
    width={width}
    disabled={disabled}
    onClick={onClick}
    height= {height}
    >
    
    {value}
  </BasicNormalButton>
);

UniversalButton.defaultProps = {
  value: '',
  disabled: false,
  width: 72,
  isEquals: false,
  height: 48
};
export default UniversalButton;
