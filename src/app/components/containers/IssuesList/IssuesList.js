import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import IssueCard from 'components/subcomponents/IssueCard';
import { ListWrapper } from 'globalStyles';

const buildIssueCards = (issues, activeIssue, setActiveIssue) => issues.map((issue) => {
  return (
    <IssueCard
      title={issue.title}
      avatarLink={issue.user.avatar_url}
      isActive={issue.id === activeIssue}
      created={issue.created_at}
      updated={issue.updated_at}
      onClick={() => setActiveIssue(issue.id)}
    />
  );
});

const IssuesList = ({
  issues,
  activeRepo,
  activeIssue,
  setActiveIssue,
}) => {
  const activeIssueSet = issues[activeRepo];

  if (!activeIssueSet || !activeIssueSet.issues.length) {
    return null;
  }

  const RenderedIssues = useMemo(
    () => buildIssueCards(activeIssueSet.issues, activeIssue, setActiveIssue),
    [activeIssueSet.issues, activeIssue],
  );

  return (
    <ListWrapper>
      {RenderedIssues}
    </ListWrapper>
  );
};

IssuesList.propTypes = {
  issues: PropTypes.shape({}).isRequired,
  activeRepo: PropTypes.number.isRequired,
  activeIssue: PropTypes.number.isRequired,
  setActiveIssue: PropTypes.func.isRequired,
};

export default IssuesList;
