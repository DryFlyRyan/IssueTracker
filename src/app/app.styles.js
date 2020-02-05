import styled from 'styled-components';

export const DetailsDisplayWrapper = styled.div`
  margin-top: ${props => props.theme.standardPadding};
  margin-bottom: ${props => props.theme.standardPadding};
`;

export const DetailConfirmationBlocks = styled.div`
  margin: 2rem 0;
`;

export const CenteredColumnContainer = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
align-content: center;
`;

export const TextCentered = styled.div`
  text-align: center; 
`;

export const TextBlock = styled.div`
  margin: 1rem 0;
  &:last-child {
    margin-top: 2rem;
  }
`;

export const SpreadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;
