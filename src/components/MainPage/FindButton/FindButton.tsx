import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/named
import { connect, ConnectedProps } from 'react-redux';
import { setResultData } from '../../../actions';
import { RootState } from '../../../store';
import { getResult, getToken } from '../../../utils/apiUtils';
import { ResultResponseType } from '../../../utils/apiUtils.type';
import { FindContainer, FindFalcone } from './FindButton.style';
import { FindButtonType } from './FindButton.type';

const mapStateToProps = (state: RootState) => ({
  selectedPlanetsReducer: state.selectedPlanetsReducer,
  selectedVehiclesReducer: state.selectedVehiclesReducer,
});

const mapDispatchToProps = {
  setResultDataProp: setResultData,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & FindButtonType;

const FindButton = ({
  selectedPlanetsReducer,
  selectedVehiclesReducer,
  setResultDataProp,
  timeTaken,
}: Props) => {
  const [token, setToken] = useState('');

  const findFalcone = async () => {
    const result = await getResult({
      token,
      planetNames: selectedPlanetsReducer,
      vehicleNames: selectedVehiclesReducer,
    });

    let finalResult: ResultResponseType = {};
    if (result?.error) {
      // If token has expired, try with new token
      const tokenVal = await getToken();
      setToken(tokenVal); //set new token
      finalResult = await getResult({
        token: tokenVal,
        planetNames: selectedPlanetsReducer,
        vehicleNames: selectedVehiclesReducer,
      });
    } else {
      finalResult = result;
    }

    // Set the final result data to be accessed in different page
    if (finalResult.status === 'success' && finalResult.planet_name) {
      setResultDataProp({
        status: finalResult.status,
        planet: finalResult.planet_name,
        timeTaken,
      });
    } else if (finalResult.status === 'false') {
      setResultDataProp({
        status: finalResult.status,
        planet: '',
        timeTaken,
      });
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

export default connector(FindButton);
