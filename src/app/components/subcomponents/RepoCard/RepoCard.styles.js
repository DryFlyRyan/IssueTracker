import styled from 'styled-components';
import {
  CardWrapper,
  CardMiddleLayer,
  CardBottomLayer,
} from 'globalStyles';

export const RepoCardWrapper = styled(CardWrapper)`
  margin-right: 2rem;
`;

export const RepoCardBottomLayer1 = styled(CardMiddleLayer)`
  border-color:#E89B1A;
`;

export const RepoCardBottomLayer2 = styled(CardBottomLayer)`
  border-color:#D35716;
`;

export const RepoCardTopLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 3px solid #E89B1A;
`;
