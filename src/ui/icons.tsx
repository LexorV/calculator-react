import styled from 'styled-components';
import { ReactComponent as SceneryPic } from '../assets/images/icons/scenery-icon.svg';
import { ReactComponent as EyePic } from '../assets/images/icons/eye-icon.svg';
import { ReactComponent as SelectorPic } from '../assets/images/icons/selector-icon.svg';

type TiconBasic = {
  color?: string
};
export const SceneryIcon = styled(SceneryPic)<TiconBasic>`
  width: 20px;
  height: 20px;
  display: block;
  & > path {
    stroke: ${({ color }) => color};
    }
`;
export const EyeIcon = styled(EyePic)<TiconBasic>`
  width: 20px;
  height: 20px;
  display: block;
  & > path {
    stroke: ${({ color }) => color};
    }
`;
export const SelectorIcon = styled(SelectorPic)<TiconBasic>`
  width: 20px;
  height: 20px;
  display: block;
  & > path {
    stroke: ${({ color }) => color};
    }
`;
