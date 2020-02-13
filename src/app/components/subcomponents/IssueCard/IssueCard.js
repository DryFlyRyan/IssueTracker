import React from 'react';
import PropTypes from 'prop-types';

import DateLine from 'components/subcomponents/DateLine';

import {
  DateContainer,
} from 'globalStyles';

import {
  IssueCardWrapper,
  IssueCardMiddleLayer,
  IssueCardBottomLayer,
  IssueCardTitle,
  AvatarWrapper,
  ContentWrapper,
  AvatarImage,
  TitleWrapper,
} from './IssueCard.styles';

const IssueCard = ({
  avatarLink,
  title,
  created,
  updated,
  onClick,
}) => {
  return (
    <IssueCardWrapper
      onClick={onClick}
    >
      <IssueCardMiddleLayer />
      <IssueCardBottomLayer />
      <AvatarWrapper>
        <AvatarImage
          avatarURL={avatarLink}
        />
      </AvatarWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <IssueCardTitle>
            {title}
          </IssueCardTitle>
        </TitleWrapper>
        <DateContainer>
          <DateLine
            isCreated
            date={created}
          />
          <DateLine
            date={updated}
          />
        </DateContainer>
      </ContentWrapper>
    </IssueCardWrapper>
  );
};

IssueCard.propTypes = {
  avatarLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IssueCard;
