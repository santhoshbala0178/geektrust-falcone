import {
  RESET_SELECTED_PLANETS,
  SET_SELECTED_PLANETS,
} from '../../constants/actionTypes';
import { TOTAL_SELECTION } from '../../constants/constants';
import SelectedPlanetsActionType from './selectedPlanetsReducer.type';

const initialState: string[] = Array(TOTAL_SELECTION).fill('');

export const selectedPlanetsReducer = (
  state = initialState,
  { type, planet, index }: SelectedPlanetsActionType,
): string[] => {
  switch (type) {
    case SET_SELECTED_PLANETS:
      return [...state.slice(0, index), planet, ...state.slice(index + 1)];
    case RESET_SELECTED_PLANETS:
      return [...Array(TOTAL_SELECTION).fill('')];
    default:
      return state;
  }
};
