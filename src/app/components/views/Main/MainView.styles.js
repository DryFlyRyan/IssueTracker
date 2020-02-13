import styled from 'styled-components';

export const MainViewWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items:center;
  overflow: hidden;
  position: relative;
  background: #FAF2E5;
`;

export const ListOuterContainer = styled.section`
  height: 90%;
  max-height: 90%;
  max-width: 95vw;
  background: #EDDDCD;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 10px solid #7B310F;
  box-sizing: border-box;
`;

export const ListMiddleContainer = styled.div`
  /* padding: 10px 0; */

  border: 10px solid #FB5100;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

`;

// Innermost Layer
export const ListContentContainer = styled.div`
  /* padding: 10px 0; */
  border: 10px solid #F69F43;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`;
