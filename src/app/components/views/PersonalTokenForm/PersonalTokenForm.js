import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PersonalTokenForm = ({
  token = '',
  submitPersonalToken,
} = {}) => {
  const [personalToken, setPersonalToken] = useState(token);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    return submitPersonalToken(personalToken);
  };

  return (
    <section>
      <form>
        <h3>
          Please enter your GitHub personal token.
        </h3>
        <input
          value={personalToken}
          onChange={(e) => setPersonalToken(e.target.value)}
        />
        <button
          type="submit"
          disabled={!personalToken.length}
          onClick={handleSubmit}
        >
          Load User Repos
        </button>
      </form>
    </section>
  );
};

PersonalTokenForm.propTypes = {
  token: PropTypes.string,
};

PersonalTokenForm.defaultProps = {
  token: '',
};

export default PersonalTokenForm;
