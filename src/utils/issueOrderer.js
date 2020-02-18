export default ({ issues, issueOrder }) => {
  const workingIssueOrder = issueOrder.slice();
  const workingIssueSet = issues.slice();
  const orderedIssues = [];

  while (workingIssueOrder.length) {
    const targetIssueId = workingIssueOrder[0];
    const issueIndex = workingIssueSet.findIndex((issue) => issue.id === targetIssueId);

    if (issueIndex >= 0) {
      const targetIssue = workingIssueSet.splice(issueIndex, 1);
      orderedIssues.push(targetIssue[0]);
    }
    workingIssueOrder.shift();
  }

  return [...orderedIssues, ...workingIssueSet];
};
