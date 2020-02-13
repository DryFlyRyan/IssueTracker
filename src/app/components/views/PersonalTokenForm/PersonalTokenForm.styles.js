import styled from 'styled-components';

export const FormWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  max-height: 100vw;
  height: 100%;
  width: 100%;
  max-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: hidden;
`;

export const PTForm = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FAF2E5;
  position: relative;
`;

export const PTFormLayer1 = styled.div`
  position: absolute;
  -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  border-bottom: 3px solid #E89B1A;
  border-right: 3px solid #E89B1A;
  z-index: -50;
`;

export const PTFormLayer2 = styled.div`
  position: absolute;
  -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  top: 0;
  left: 0;
  bottom: 0;
  min-height: 100%;
  min-width: 100%;
  border-bottom: 6px solid #D35716;
  border-right: 6px solid #D35716;
  z-index: -100;
`;

export const FormTitle = styled.h1`
  font-family: 'Bangers';
  letter-spacing: 2px;
  font-size: 2.5rem;
`;

export const PTInput = styled.input`
  width: 80%;
  font-size: 30px;
  font-family: 'Maxwell';
  border: none;
  border-bottom: 1px solid #E89B1A;
  outline: none;
  margin-bottom: 2px;
  :active, :focus {
    border-bottom: 3px solid #E89B1A;
    margin-bottom: 0;
  }
  box-sizing: border-box;
`;

export const SubmitButton = styled.button`
  margin-top: 1.5rem;
  font-family: 'Maxwell';
  font-size: 36px;
  width: 80%;
  min-height: 75px;
  height: 55px;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  background: rgb(241,196,22);
  background: linear-gradient(90deg, rgba(241,196,22,1) 0%, rgba(228,147,22,1) 53%, rgba(211,87,22,1) 100%);

  border: none;
  transition:  all .1s linear;
  background-size: 150% auto;
  box-shadow: 0 0 0 0px rgba(153,153,153,0.75);
  background-position: right center;
  
  :hover {
    transform: scale(1.02);
    box-shadow: 8px 8px 6px 0px rgba(153,153,153,0.75);
    background-position: left center;
  }
`;
