import React, { useState } from 'react';
import { VehicleDetailsType } from '../MainPage/MainPage.type';
import {
  VehicleSelectorContainer,
  VehicleSelectorInput,
  VehicleSelectorTextContainer,
} from './VehicleSelector.style';
import VehicleSelectorType from './VehicleSelector.type';

const VehicleSelector = ({
  id,
  vehicleDetails,
  planetDistance,
  updateVehicleDetails,
}: VehicleSelectorType) => {
  const [currentSelect, setCurrentSelect] = useState('');

  const onVehicleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get previous selected value to update count properly
    const prevVal = currentSelect;
    const curVal = e.target.value;
    setCurrentSelect(curVal);
    updateVehicleDetails(prevVal, curVal, id);
  };

  return (
    <VehicleSelectorContainer>
      {vehicleDetails.map((vehicle: VehicleDetailsType, idx: number) => {
        return (
          <VehicleSelectorTextContainer key={`selector-${idx}`}>
            <VehicleSelectorInput
              type="radio"
              name={`vehicle_selector_${id}`}
              value={vehicle.name}
              disabled={
                currentSelect !== vehicle.name &&
                (vehicle.max_distance < planetDistance ||
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

export default VehicleSelector;
