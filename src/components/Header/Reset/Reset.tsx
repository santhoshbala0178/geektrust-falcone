import React from 'react';
import ResetButton from './Reset.style';

const Reset = () => {
  const resetSelections = () => {
    // Reset the page to home page
    window.history.pushState({}, '', '/');
    window.location.reload();
  };
  return <ResetButton onClick={resetSelections}>Reset</ResetButton>;
};

export default Reset;
