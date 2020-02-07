import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StripesBackground from 'components/subcomponents/StripesBackground';

import {
  FormTitle,
  FormWrapper,
  PTForm,
  PTFormLayer1,
  PTFormLayer2,
  SubmitButton,
  PTInput,
} from './PersonalTokenForm.styles';

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
    <FormWrapper>
      <StripesBackground />
      <PTForm>
        <PTFormLayer1 />
        <PTFormLayer2 />
        <FormTitle>
          Please enter your GitHub personal token
        </FormTitle>
        <PTInput
          value={personalToken}
          onChange={(e) => setPersonalToken(e.target.value)}
        />
        <SubmitButton
          type="submit"
          disabled={!personalToken.length}
          onClick={handleSubmit}
        >
          Load User Repos
        </SubmitButton>
      </PTForm>
    </FormWrapper>
  );
};

PersonalTokenForm.propTypes = {
  token: PropTypes.string,
};

PersonalTokenForm.defaultProps = {
  token: '',
};

export default PersonalTokenForm;
