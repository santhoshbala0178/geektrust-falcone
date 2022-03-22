import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/named
import { connect, ConnectedProps } from 'react-redux';
import { setPlanetDetails, setVehicleDetails } from '../../../actions';
import { RootState } from '../../../store';
import { getPlanetDetails, getVehicleDetails } from '../../../utils/apiUtils';
import FindButton from '../FindButton/FindButton';
import MainPageSelector from '../MainPageSelector';
import TimeTaken from '../TimeTaken';
import { MainPageContainer, MainPageHeaderText } from './MainPage.style';

const mapStateToProps = (state: RootState) => ({
  selectedVehiclesReducer: state.selectedVehiclesReducer,
});

const mapDispatchToProps = {
  setPlanetDetailsProp: setPlanetDetails,
  setVehicleDetailsProp: setVehicleDetails,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const MainPage = ({
  selectedVehiclesReducer,
  setPlanetDetailsProp,
  setVehicleDetailsProp,
}: Props) => {
  const [timeTaken, setTimeTaken] = useState(0);

  useEffect(() => {
    const getData = async () => {
      // Get List of planets and their distances, list of vehicles
      const planetDetailsList = await getPlanetDetails();
      const vehicleList = await getVehicleDetails();
      setPlanetDetailsProp(planetDetailsList);
      setVehicleDetailsProp(vehicleList);
    };
    getData();
  }, [setPlanetDetailsProp, setVehicleDetailsProp]);

  return (
    <MainPageContainer>
      <MainPageHeaderText>
        Select planets you want to search in:
      </MainPageHeaderText>
      <MainPageSelector timeTaken={timeTaken} setTimeTaken={setTimeTaken} />
      <TimeTaken timeTaken={timeTaken} />
      {selectedVehiclesReducer &&
        selectedVehiclesReducer.every((vehicle) => vehicle !== '') && (
          <FindButton timeTaken={timeTaken} />
        )}
    </MainPageContainer>
  );
};

export default connector(MainPage);
