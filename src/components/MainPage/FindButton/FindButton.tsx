import React, { useEffect, useState } from 'react';
import { getResult, getToken } from '../../../utils/apiUtils';
import { ResultResponseType } from '../../../utils/apiUtils.type';
import { FindContainer, FindFalcone } from './FindButton.style';
import FindButtonType from './FindButton.type';

const FindButton = ({ planetNames, vehicleNames }: FindButtonType) => {
  const [token, setToken] = useState('');

  const findFalcone = async () => {
    const result = await getResult({
      token,
      planetNames,
      vehicleNames,
    });

    if (result?.error) {
      // If token has expired, try with new token
      const tokenVal = await getToken();
      setToken(tokenVal); //set new token
      const resultJson: ResultResponseType = await getResult({
        token: tokenVal,
        planetNames,
        vehicleNames,
      });

      console.log(resultJson);
    } else {
      console.log(result);
    }
  };

  useEffect(() => {
    const getTokenVal = async () => {
      const tokenVal = await getToken();
      setToken(tokenVal);
    };

    getTokenVal();
  }, []);

  return (
    <FindContainer>
      <FindFalcone onClick={findFalcone}>Find Falcone!</FindFalcone>
    </FindContainer>
  );
};

export default FindButton;
