import styled from 'styled-components';
import {
  CardWrapper,
  CardMiddleLayer,
  CardBottomLayer,
  CardTitle,
} from 'globalStyles';

export const IssueCardOuterWrapper = styled.div`
    opacity: ${(props) => props.isDragging ? '0' : '1'};
    ${props => props.isDragging ? 'transform: skew(20deg);' : ''}
    background: transparent;
`;

export const IssueCardWrapper = styled(CardWrapper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
`;

export const IssueCardMiddleLayer = styled(CardMiddleLayer)`
  border-color: #E89B1A;
`;

export const IssueCardBottomLayer = styled(CardBottomLayer)`
  border-color: #D35716;
`;

export const AvatarWrapper = styled.div`
  height: 100%;
  min-height: 50px;
  width: 75px;
  max-width: 75px;
  margin-right: 15px;
  margin-left: 20px;
  transform: skew(20deg);
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
  max-width: 70px;
  min-width: 70px;
  max-height: 70px;
  min-height: 70px;
  box-sizing: border-box;
  margin: 5px;
`;

export const TitleWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ContentWrapper = styled.div`
  flex: 1 1 100%;
  overflow: hidden;
`;

export const IssueCardTitle = styled(CardTitle)`
  font-family: 'Maxwell Bold';
  font-size: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
