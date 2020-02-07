import styled from 'styled-components';

export const IssueCardWrapper = styled.div`
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

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
`;

export const AvatarWrapper = styled.div`
  height: 100%;
  min-height: 50px;
  width: 75px;
  max-width: 75px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const AvatarImage = styled.div`
  background: ${(props) => `url(${props.avatarURL}) bottom center no-repeat, transparent`};
  background-size: contain;
  border-radius: 50%;
  max-width: 50px;
  min-width: 50px;
  max-height: 50px;
  min-height: 50px;
  box-sizing: border-box;
  margin: 5px;
`;

export const ContentWrapper = styled.div`
  flex: 1 1 100%;
`;

export const RepoCardTopLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const RepoCardTitle = styled.h4`
  font-family: 'Maxwell';
  margin: 0;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
