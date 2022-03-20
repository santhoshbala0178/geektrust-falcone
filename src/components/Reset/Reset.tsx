import React from 'react';
import ResetButton from './Reset.style';

const Reset = () => {
  const resetSelections = () => {
    window.location.reload();
  };
  return <ResetButton onClick={resetSelections}>Reset</ResetButton>;
};

export default Reset;
