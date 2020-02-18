import React from 'react';
import PropTypes from 'prop-types';

import ReposList from 'components/containers/ReposList';
import IssuesList from 'components/containers/IssuesList';

import {
  MainViewWrapper,
  ListOuterContainer,
  ListMiddleContainer,
  ListContentContainer,
} from './MainView.styles';

const MainView = ({
  activeRepo,
  setActiveRepo,
  setActiveIssue,
}) => {
  return (
    <MainViewWrapper>
      <ListOuterContainer>
        <ListMiddleContainer>
          <ListContentContainer>
            <ReposList
              activeRepo={activeRepo}
              setActiveRepo={setActiveRepo}
            />
            {activeRepo
              ? (
                <IssuesList
                  setActiveIssue={setActiveIssue(activeRepo)}
                />
              )
              : null}
          </ListContentContainer>
        </ListMiddleContainer>
      </ListOuterContainer>
    </MainViewWrapper>
  );
};

MainView.propTypes = {
  activeRepo: PropTypes.number.isRequired,
  setActiveRepo: PropTypes.func.isRequired,
  setActiveIssue: PropTypes.func.isRequired,
};

export default MainView;
