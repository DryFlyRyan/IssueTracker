import styled from 'styled-components';

export const RepoCardWrapper = styled.div`
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
  max-width: 100%;
  margin: 1rem;
  padding: .625rem;

  transform: skew(-20deg);

  min-height: 65px;
  min-width: 550px;
`;

export const RepoCardBottomLayer1 = styled.div`
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

export const RepoCardBottomLayer2 = styled.div`
  /* transform: skew(-20deg); */
  position: absolute;
  -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  /* margin: .625rem; */
  top: 0;
  left: 0;
  bottom: 0;
  /* right: 0; */
  min-height: 100%;
  min-width: 100%;
  border-bottom: 6px solid #D35716;
  border-right: 6px solid #D35716;
  z-index: -100;
`;

export const RepoCardTopLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 3px solid #E89B1A;
`;

export const RepoCardTitle = styled.h4`
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
