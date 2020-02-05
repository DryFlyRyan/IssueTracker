import styled from 'styled-components';

export const RepoCardWrapper = styled.div`
  background: ${(props) => props.isActive ? '#89DAD1' : '#F1ECCE'};
  transition: all .1s ease-in;
  
  :hover, :active {
    background: #89DAD1;
  }
  
  cursor: pointer;
  max-width: 100%;
  border-radius: 5px;
  margin: .625rem;
  border: 1px solid black;
  padding: .625rem;
`;

export const RepoCardTopLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const RepoCardTitle = styled.h4`
  margin: 0;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
