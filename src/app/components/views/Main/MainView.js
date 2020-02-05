import React from 'react';
import PropTypes from 'prop-types';

import ReposList from 'components/subcomponents/ReposList';

const MainView = ({ activeRepo, setActiveRepo }) => {
  return (
    <div>
      <ReposList
        activeRepo={activeRepo}
        setActiveRepo={setActiveRepo}
      />
    </div>
  );
};

MainView.propTypes = {
  activeRepo: PropTypes.number.isRequired,
  setActiveRepo: PropTypes.func.isRequired,
};

export default MainView;
