import React from 'react';
import PropTypes from 'prop-types';

import DateLine from 'components/subcomponents/DateLine';

import {
  CardTitle,
  DateContainer,
} from 'globalStyles';

import {
  RepoCardWrapper,
  RepoCardTopLine,
  RepoCardBottomLayer1,
  RepoCardBottomLayer2,
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
      <RepoCardBottomLayer1 />
      <RepoCardBottomLayer2 />
      <RepoCardTopLine>
        <CardTitle>
          {name}
        </CardTitle>
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
