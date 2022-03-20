import {
  RESET_SELECTED_VEHICLES,
  SET_SELECTED_VEHICLES,
} from '../../constants/actionTypes';
import { TOTAL_SELECTION } from '../../constants/constants';
import SelectedVehiclesActionType from './selectedVehiclesReducer.type';

const initialState: string[] = Array(TOTAL_SELECTION).fill('');

export const selectedVehiclesReducer = (
  state = initialState,
  { type, vehicle, index }: SelectedVehiclesActionType,
): string[] => {
  switch (type) {
    case SET_SELECTED_VEHICLES:
      return [...state.slice(0, index), vehicle, ...state.slice(index + 1)];
    case RESET_SELECTED_VEHICLES:
      return [...Array(TOTAL_SELECTION).fill('')];
    default:
      return state;
  }
};
