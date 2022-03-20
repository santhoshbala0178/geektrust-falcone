import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/named
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPlanetDetails, setVehicleDetails } from '../../../actions';
import { TOTAL_SELECTION } from '../../../constants/constants';
import { RootState } from '../../../store';
import { getPlanetDetails, getVehicleDetails } from '../../../utils/apiUtils';
import FindButton from '../FindButton/FindButton';
import PlanetDropDown from '../PlanetDropDown';
import TimeTaken from '../TimeTaken';
import VehicleSelector from '../VehicleSelector';
import {
  MainPageContainer,
  MainPageHeaderText,
  PlanetSelectors,
  SelectorPanel,
} from './MainPage.style';

const mapStateToProps = (state: RootState) => ({
  planetDetailsReducer: state.planetDetailsReducer,
  vehicleDetailsReducer: state.vehicleDetailsReducer,
  selectedPlanetsReducer: state.selectedPlanetsReducer,
  selectedVehiclesReducer: state.selectedVehiclesReducer,
});

const mapDispatchToProps = {
  setPlanetDetailsProp: setPlanetDetails,
  setVehicleDetailsProp: setVehicleDetails,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const MainPage = ({
  planetDetailsReducer,
  vehicleDetailsReducer,
  selectedPlanetsReducer,
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

  const updateTimeTaken = (prevVal: string, curVal: string, id: number) => {
    // Get the total time taken for search
    let totalTime = timeTaken;

    // Remove the previosly selected vehicles time
    let selectedVehicle = vehicleDetailsReducer.find(
      (vehicle) => vehicle.name === prevVal,
    );
    if (selectedVehicle) {
      totalTime -=
        planetDetailsReducer[selectedPlanetsReducer[id]] /
        selectedVehicle.speed;
    }
    // add the current vehicles time
    selectedVehicle = vehicleDetailsReducer.find(
      (vehicle) => vehicle.name === curVal,
    );
    if (selectedVehicle) {
      totalTime +=
        planetDetailsReducer[selectedPlanetsReducer[id]] /
        selectedVehicle.speed;
    }

    setTimeTaken(totalTime);
  };

  return (
    <MainPageContainer>
      <MainPageHeaderText>
        Select planets you want to search in:
      </MainPageHeaderText>
      <PlanetSelectors>
        {Array(TOTAL_SELECTION)
          .fill(0)
          .map((_, id) => {
            return (
              <SelectorPanel key={`selector-${id}`}>
                <PlanetDropDown
                  dropdownId={id}
                  updateTimeTaken={updateTimeTaken}
                />
                {selectedPlanetsReducer[id] && (
                  <VehicleSelector id={id} updateTimeTaken={updateTimeTaken} />
                )}
              </SelectorPanel>
            );
          })}
      </PlanetSelectors>
      <TimeTaken timeTaken={timeTaken} />
      <Link to="/result">
        {selectedVehiclesReducer &&
          selectedVehiclesReducer.every((vehicle) => vehicle !== '') && (
            <FindButton timeTaken={timeTaken} />
          )}
      </Link>
    </MainPageContainer>
  );
};

export default connector(MainPage);
