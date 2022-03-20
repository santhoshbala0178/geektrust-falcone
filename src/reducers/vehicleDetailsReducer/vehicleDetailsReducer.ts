import {
  DECREMENT_VEHICLE_COUNT,
  INCREMENT_VEHICLE_COUNT,
  SET_VEHICLE_DETAILS,
} from '../../constants/actionTypes';
import {
  VehicleDetailsType,
  VehicleDetailsActionType,
} from './vehicleDetailsReducer.type';

const initialState: VehicleDetailsType[] = [];

export const vehicleDetailsReducer = (
  state = initialState,
  { type, vehicleDetails, vehicleName }: VehicleDetailsActionType,
): VehicleDetailsType[] => {
  switch (type) {
    case SET_VEHICLE_DETAILS:
      if (vehicleDetails) {
        return [...vehicleDetails];
      }
      return state;
    case INCREMENT_VEHICLE_COUNT:
      if (vehicleName) {
        return [
          ...state.map((vehicle) =>
            vehicle.name === vehicleName
              ? { ...vehicle, total_no: vehicle.total_no + 1 }
              : vehicle,
          ),
        ];
      }
      return state;
    case DECREMENT_VEHICLE_COUNT:
      if (vehicleName) {
        return [
          ...state.map((vehicle) =>
            vehicle.name === vehicleName
              ? { ...vehicle, total_no: vehicle.total_no - 1 }
              : vehicle,
          ),
        ];
      }
      return state;
    default:
      return state;
  }
};
