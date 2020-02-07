import { css } from 'styled-components';
import maxwellReg from './maxwell_reg.ttf';

export const fontFaces = css`
  @font-face {
    font-family: 'Maxwell';
    src: url(${maxwellReg});
    font-style: normal;
  }
`;
