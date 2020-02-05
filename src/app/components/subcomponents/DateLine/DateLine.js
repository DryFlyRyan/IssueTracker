import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  DateLineWrapper,
  DateLineTitle,
  DateLineData,
} from './DateLine.styles';

const DateLine = ({ isCreated, date }) => (
  <DateLineWrapper>
    <DateLineTitle>
      {isCreated ? 'CREATED:' : 'UPDATED:'}
    </DateLineTitle>
    <DateLineData>
      {isCreated
        ? moment(date).format('MMMM Do, YYYY')
        : moment(date).fromNow()}
    </DateLineData>
  </DateLineWrapper>
);

DateLine.propTypes = {
  isCreated: PropTypes.bool,
  date: PropTypes.string.isRequired,
};

DateLine.defaultProps = {
  isCreated: false,
};

export default DateLine;
