import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { isEqual } from 'lodash';

import { issueOrderer } from 'utils';
import IssueCard from 'components/subcomponents/IssueCard';
import { ListWrapper } from 'globalStyles';

/* HELPER FNS */
const buildIssueCards = ({
  activeIssueSet,
  activeIssue,
  setActiveIssue,
  handleDrag,
  handleDrop,
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
    handleDrag={handleDrag}
    handleDrop={handleDrop}
  />
));

const IssuesList = ({
  issues,
  activeIssue,
  setActiveIssue,
  saveIssueOrder,
  repoId,
}) => {
  const {
    issues: activeIssueSet,
    issueOrder: savedIssueOrder,
  } = issues;

  if (!activeIssueSet.length) {
    return null;
  }

  /* STATE CONTROLLERS */
  const [issueOrder, updateIssueOrder] = useState(savedIssueOrder);

  const orderedIssues = useMemo(() => issueOrderer({
    issues: activeIssueSet,
    issueOrder,
  }),
  [activeIssueSet, issueOrder]);

  /* EVENT HANDLERS */
  const handleDrag = ({ draggedId, hoveredId }) => {
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

  const handleDrop = () => {
    if (isEqual(savedIssueOrder, issueOrder)) {
      return;
    }

    return saveIssueOrder({ repoId, issueOrder });
  };

  /* RENDER VARS */
  const RenderedIssues = buildIssueCards({
    activeIssueSet: orderedIssues,
    activeIssue,
    setActiveIssue,
    handleDrag,
    handleDrop,
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
  repoId: PropTypes.number.isRequired,
  setActiveIssue: PropTypes.func.isRequired,
  saveIssueOrder: PropTypes.func.isRequired,
};

IssuesList.defaultProps = {
  activeIssue: -1,
};

export default IssuesList;
