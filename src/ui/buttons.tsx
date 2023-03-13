import styled from 'styled-components';
import React, { MouseEventHandler, FC } from 'react';
import { EyeIcon, SelectorIcon } from './icons';

type TBasicButtonProps = {
  disabled?: boolean;
  width?: number;
  height?: number;
  isEquals?: boolean;
};
interface IButtonProps extends TBasicButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  value?: string | number;
}
/* eslint-disable */
type TmodeSwithButton = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
  type?: 'Constructor' | 'Runtime'
};
type TmodeSwithButtonStyle = Omit<TmodeSwithButton, 'onClick' | 'type' >;

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
background-color: ${(props) => (props.isEquals ? '#5D5FEF' : '#FFFFFF')};
`;
/* eslint-disable */
const ButtonSwithStyle = styled.button<TmodeSwithButtonStyle>`
height: 36px;
background-color: ${(props) => (props.isActive ? '#FFFFFF' : '#F3F4F6')};
  border-radius: 5px;
  border: none;
  display: flex; 
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  padding: 12px;
  width:100%;
  cursor: pointer;
`


export const UniversalButton: FC<IButtonProps> = ({
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
export const ModeSwithButton: FC<TmodeSwithButton> = ({onClick, isActive, type}) => {
  const checkedColorIcons = (isActiveColor:boolean) => 
  isActiveColor ? '#5D5FEF': '#4D5562'
  const checkedTypeIcons = (isActiveColor: boolean, typeButton?:'Constructor' | 'Runtime') => 
  typeButton === 'Constructor' 
  ? <SelectorIcon color={checkedColorIcons(isActiveColor)}  /> 
  :<EyeIcon color={checkedColorIcons(isActiveColor)} />
  return(
<ButtonSwithStyle
  onClick={onClick}
  isActive ={isActive}>
  {checkedTypeIcons(isActive, type)} 
  {type}
</ButtonSwithStyle>
)}
ModeSwithButton.defaultProps = {
  type: 'Constructor',
  isActive: false,
};

UniversalButton.defaultProps = {
  value: '',
  disabled: false,
  width: 72,
  isEquals: false,
  height: 48
};
export default UniversalButton;
