import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/named
import { connect, ConnectedProps } from 'react-redux';
import { setVehicleAndUpdateCount } from '../../../actions';
import { RootState } from '../../../store';
import {
  VehicleSelectorContainer,
  VehicleSelectorInput,
  VehicleSelectorTextContainer,
} from './VehicleSelector.style';
import VehicleSelectorType from './VehicleSelector.type';

const mapStateToProps = (state: RootState) => ({
  planetDetailsReducer: state.planetDetailsReducer,
  vehicleDetailsReducer: state.vehicleDetailsReducer,
  selectedPlanetsReducer: state.selectedPlanetsReducer,
  selectedVehiclesReducer: state.selectedVehiclesReducer,
});

const mapDispatchToProps = {
  setVehicleAndUpdateCountProp: setVehicleAndUpdateCount,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & VehicleSelectorType;

const VehicleSelector = ({
  id,
  planetDetailsReducer,
  vehicleDetailsReducer,
  selectedPlanetsReducer,
  setVehicleAndUpdateCountProp,
  updateTimeTaken,
}: Props) => {
  const [currentSelect, setCurrentSelect] = useState('');
  const [previousPlanets, setPreviousPlanets] = useState<string[]>();

  const onVehicleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get previous selected value to update count properly
    const prevVal = currentSelect;
    const curVal = e.target.value;
    setCurrentSelect(curVal);
    setVehicleAndUpdateCountProp(prevVal, curVal, id);
    // Update the time taken for search
    updateTimeTaken(prevVal, curVal, id);
  };

  useEffect(() => {
    // If the planet is changed, reset the vehicle selection
    if (previousPlanets && previousPlanets[id] !== selectedPlanetsReducer[id]) {
      setCurrentSelect('');
    }

    setPreviousPlanets([...selectedPlanetsReducer]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlanetsReducer]);

  return (
    <VehicleSelectorContainer>
      {vehicleDetailsReducer.map((vehicle, idx: number) => {
        return (
          <VehicleSelectorTextContainer key={`selector-${idx}`}>
            <VehicleSelectorInput
              type="radio"
              name={`vehicle_selector_${id}`}
              value={vehicle.name}
              checked={currentSelect !== '' && currentSelect === vehicle.name}
              disabled={
                // Disable if the value is not already selected, and vehicle distance is less than planet distance or the count is zero
                currentSelect !== vehicle.name &&
                (vehicle.max_distance <
                  planetDetailsReducer[selectedPlanetsReducer[id]] ||
                  vehicle.total_no === 0)
              }
              onChange={(e) => onVehicleChange(e)}
            />
            {`${vehicle.name} (${vehicle.total_no})`}
          </VehicleSelectorTextContainer>
        );
      })}
    </VehicleSelectorContainer>
  );
};

export default connector(VehicleSelector);
