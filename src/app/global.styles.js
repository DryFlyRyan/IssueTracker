import styled, { createGlobalStyle } from 'styled-components';
import MaxwellReg from './fonts/maxwell_bold.ttf';
// import MaxwellBold from './fonts/maxwell_bold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Maxwell';
        src: url(http://localhost:3000/fonts/maxwell_reg.ttf) format('truetype'),
        url(${MaxwellReg}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Maxwell Bold';
        src: url(http://localhost:3000/fonts/maxwell_bold.ttf) format('truetype'),
        url(${MaxwellReg}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    body {
      min-height: 100vh;
      max-height: 100vh;
      overflow: hidden;
      margin: 0;
      padding: 0;
      /* background: #0E2143; */
    }
`;

export const ListWrapper = styled.section`
  margin: 30px;
  flex: 1 1 50%;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
`;

export const CardWrapper = styled.div`
  background: ${(props) => props.isActive ? '#89DAD1' : '#FAF2E5'};
  transition:  all .1s linear;
  position: relative;
  box-shadow: 10px 10px 6px 0px rgba(153,153,153,0);
  :hover {
    box-shadow: 10px 10px 6px 0px rgba(153,153,153,0.75);
  }
  :hover, :active {
    background: #89DAD1;
  }
  cursor: pointer;
  transform: skew(-20deg);
  width: 80%;
  max-width: 80%;
  min-height: 65px;
  min-width: 550px;

  margin: 1rem;
  padding: .625rem;
`;

export const CardMiddleLayer = styled.div`
  position: absolute;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
  z-index: -50;
`;

export const CardBottomLayer = styled.div`
  position: absolute;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  top: 0;
  left: 0;
  bottom: 0;
  min-height: 100%;
  min-width: 100%;
  border-bottom: 6px solid transparent;
  border-right: 6px solid transparent;
  z-index: -100;
`;

export const CardTitle = styled.h3`
  font-family: 'Bangers';
  letter-spacing: 2px;
  font-size: 22px;
  margin: 0;
  margin-bottom: 5px;
  margin-left: 20px;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
`;
