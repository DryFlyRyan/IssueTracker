import styled from 'styled-components';

export const DateLineWrapper = styled.div`
  margin: 0;
  margin-top: 10px;
  margin-right: 3rem;
  :last-child {
    margin-right: 0;
  }
  flex: 1 1 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DateLineTitle = styled.p`
  font-size: 12pt;
  margin: 0;
  color: rgb(100, 100, 100);
`;

export const DateLineData = styled.p`
  margin: 0;
  /* color: rgb(); */
`;
