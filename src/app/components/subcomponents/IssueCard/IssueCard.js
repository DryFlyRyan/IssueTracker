import React from 'react';
import PropTypes from 'prop-types';

import DateLine from 'components/subcomponents/DateLine';

import {
  IssueCardWrapper,
  AvatarWrapper,
  ContentWrapper,
  DateContainer,
  RepoCardTitle,
  RepoCardTopLine,
  AvatarImage,
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
      <AvatarWrapper>
        <AvatarImage
          avatarURL={avatarLink}
        />
      </AvatarWrapper>
      <ContentWrapper>
        <RepoCardTopLine>
          <RepoCardTitle>
            {title}
          </RepoCardTitle>
        </RepoCardTopLine>
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
