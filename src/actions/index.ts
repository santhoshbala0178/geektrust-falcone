// eslint-disable-next-line import/named
import { Action, Dispatch } from 'redux';
import * as types from '../constants/actionTypes';
import { PlanetKeyPairDetailType } from '../reducers/planetDetailsReducer/planetDetailsReducer.type';
import { ResultReducerType } from '../reducers/resultReducer/resultReducer.type';
import { VehicleDetailsType } from '../reducers/vehicleDetailsReducer/vehicleDetailsReducer.type';

export const setPlanetDetails = (planetDetails: PlanetKeyPairDetailType) => ({
  type: types.SET_PLANET_DETAILS,
  planetDetails,
});

export const setVehicleDetails = (vehicleDetails: VehicleDetailsType[]) => ({
  type: types.SET_VEHICLE_DETAILS,
  vehicleDetails,
});

export const incrementVehicleCount = (vehicleName: string) => ({
  type: types.INCREMENT_VEHICLE_COUNT,
  vehicleName,
});

export const decrementVehicleCount = (vehicleName: string) => ({
  type: types.DECREMENT_VEHICLE_COUNT,
  vehicleName,
});

export const setSelectedPlanets = (planet: string, index: number) => ({
  type: types.SET_SELECTED_PLANETS,
  planet,
  index,
});

export const setSelectedVehicles = (vehicle: string, index: number) => ({
  type: types.SET_SELECTED_VEHICLES,
  vehicle,
  index,
});

export const resetSelectedPlanets = () => ({
  type: types.RESET_SELECTED_PLANETS,
});

export const resetSelectedVehicles = () => ({
  type: types.RESET_SELECTED_VEHICLES,
});

export const setVehicleAndUpdateCount = (
  prevVehicle: string,
  curVehicle: string,
  id: number,
) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(setSelectedVehicles(curVehicle, id));
    dispatch(decrementVehicleCount(curVehicle));
    if (prevVehicle) {
      dispatch(incrementVehicleCount(prevVehicle));
    }
  };
};

export const setResultData = ({
  status,
  planet,
  timeTaken,
}: ResultReducerType) => ({
  type: types.SET_RESULT,
  status,
  planet,
  timeTaken,
});
