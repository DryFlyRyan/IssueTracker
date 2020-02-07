import { createGlobalStyle } from 'styled-components';
import MaxwellReg from './fonts/maxwell_bold.ttf';
// import MaxwellBold from './fonts/maxwell_bold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Maxwell';
        src: url(http://localhost:3000/fonts/maxwell_reg.ttf) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    body {
      min-height: 100vh;
      max-height: 100vh;
      overflow: hidden;
      /* background: #0E2143; */
    }
`;
