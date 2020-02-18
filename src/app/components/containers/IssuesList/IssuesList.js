import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { issueOrderer } from 'utils';
import IssueCard from 'components/subcomponents/IssueCard';
import { ListWrapper } from 'globalStyles';

const buildIssueCards = ({
  activeIssueSet,
  activeIssue,
  setActiveIssue,
  moveIssue,
}) => activeIssueSet.map((issue) => (
  <IssueCard
    key={issue.id}
    title={issue.title}
    avatarLink={issue.user && issue.user.avatar_url}
    isActive={issue.id === activeIssue}
    created={issue.created_at}
    updated={issue.updated_at}
    onClick={() => setActiveIssue(issue.id)}
    id={issue.id}
    moveIssue={moveIssue}
  />
));

const IssuesList = ({
  issues,
  activeIssue,
  setActiveIssue,
}) => {
  const {
    issues: activeIssueSet,
    issueOrder: savedIssueOrder,
  } = issues;

  if (!activeIssueSet.length) {
    return null;
  }

  const [issueOrder, updateIssueOrder] = useState(savedIssueOrder);

  const orderedIssues = useMemo(() => issueOrderer({
    issues: activeIssueSet,
    issueOrder,
  }),
  [activeIssueSet, issueOrder]);

  const moveIssue = ({ draggedId, hoveredId }) => {
    let draggedIndex = -1;
    let hoveredIndex = -1;

    for (let i = 0; i < issueOrder.length; i++) {
      draggedIndex = issueOrder[i] === draggedId ? i : draggedIndex;
      hoveredIndex = issueOrder[i] === hoveredId ? i : hoveredIndex;
    }

    const newOrder = issueOrder.slice();
    newOrder.splice(draggedIndex, 1);
    newOrder.splice(hoveredIndex, 0, draggedId);

    updateIssueOrder(newOrder);
  };

  const RenderedIssues = buildIssueCards({
    activeIssueSet: orderedIssues,
    activeIssue,
    setActiveIssue,
    moveIssue,
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <ListWrapper>
        {RenderedIssues}
      </ListWrapper>
    </DndProvider>
  );
};

IssuesList.propTypes = {
  issues: PropTypes.shape({
    issues: PropTypes.arrayOf(
      PropTypes.shape({}),
    ),
    issueOrder: PropTypes.arrayOf(
      PropTypes.number,
    ),
  }).isRequired,
  activeIssue: PropTypes.number,
  setActiveIssue: PropTypes.func.isRequired,
};

IssuesList.defaultProps = {
  activeIssue: -1,
};

export default IssuesList;
