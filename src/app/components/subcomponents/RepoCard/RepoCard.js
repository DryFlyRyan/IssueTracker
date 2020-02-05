import React from 'react';
import PropTypes from 'prop-types';

import DateLine from 'components/subcomponents/DateLine';

import {
  RepoCardWrapper,
  RepoCardTitle,
  RepoCardTopLine,
  DateContainer,
} from './RepoCard.styles';

const RepoCard = ({
  isActive,
  name,
  created,
  updated,
  className,
  onClick,
}) => {
  return (
    <RepoCardWrapper
      className={className}
      isActive={isActive}
      onClick={onClick}
    >
      <RepoCardTopLine>
        <RepoCardTitle>
          {name}
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
    </RepoCardWrapper>
  );
};

RepoCard.propTypes = {
  isActive: PropTypes.bool,
  name: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

RepoCard.defaultProps = {
  isActive: false,
  className: '',
};

export default RepoCard;
