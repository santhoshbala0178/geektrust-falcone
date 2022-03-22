import React from 'react';
// eslint-disable-next-line import/named
import { connect, ConnectedProps } from 'react-redux';
import { TOTAL_SELECTION } from '../../../constants/constants';
import { RootState } from '../../../store';
import PlanetDropDown from '../PlanetDropDown';
import VehicleSelector from '../VehicleSelector';
import { PlanetSelectors, SelectorPanel } from './MainPageSelector.style';
import { MainPageSelectorType } from './MainPageSelector.type';

const mapStateToProps = (state: RootState) => ({
  planetDetailsReducer: state.planetDetailsReducer,
  vehicleDetailsReducer: state.vehicleDetailsReducer,
  selectedPlanetsReducer: state.selectedPlanetsReducer,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector> & MainPageSelectorType;

const MainPageSelector = ({
  planetDetailsReducer,
  vehicleDetailsReducer,
  selectedPlanetsReducer,
  timeTaken,
  setTimeTaken,
}: Props) => {
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
              {selectedPlanetsReducer && selectedPlanetsReducer[id] && (
                <VehicleSelector id={id} updateTimeTaken={updateTimeTaken} />
              )}
            </SelectorPanel>
          );
        })}
    </PlanetSelectors>
  );
};

export default connector(MainPageSelector);
