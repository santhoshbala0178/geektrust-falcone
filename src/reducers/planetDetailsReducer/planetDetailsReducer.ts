import { SET_PLANET_DETAILS } from '../../constants/actionTypes';
import {
  PlanetKeyPairDetailType,
  PlanetDetailsActionType,
} from './planetDetailsReducer.type';

const initialState: PlanetKeyPairDetailType = {};

export const planetDetailsReducer = (
  state = initialState,
  { type, planetDetails }: PlanetDetailsActionType,
): PlanetKeyPairDetailType => {
  switch (type) {
    case SET_PLANET_DETAILS:
      return { ...planetDetails };
    default:
      return state;
  }
};
