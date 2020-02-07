import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import RepoCard from 'components/subcomponents/RepoCard';

import { ReposListWrapper } from './ReposList.styles';

const buildRepoCards = (repos, activeRepo, setActiveRepo) => repos.map((repo) => {
  return (
    <RepoCard
      key={repo.id}
      name={repo.name}
      id={repo.id}
      created={repo.created_at}
      updated={repo.updated_at}
      isActive={repo.id === activeRepo}
      onClick={() => setActiveRepo(repo.id)}
    />
  );
});

const ReposList = ({
  activeRepo,
  setActiveRepo,
  repos,
}) => {
  const RenderedRepos = useMemo(
    () => buildRepoCards(repos, activeRepo, setActiveRepo),
    [repos, activeRepo],
  );

  return (
    <ReposListWrapper>
      {RenderedRepos}
    </ReposListWrapper>
  );
};

ReposList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  setActiveRepo: PropTypes.func.isRequired,
  activeRepo: PropTypes.number.isRequired,
};


export default ReposList;
