import { SET_RESULT } from '../../constants/actionTypes';
import {
  ResultReducerActionType,
  ResultReducerType,
} from './resultReducer.type';

const initialState: ResultReducerType = {
  planet: '',
  status: '',
  timeTaken: 0,
};

export const resultsReducer = (
  state = initialState,
  { type, planet, status, timeTaken }: ResultReducerActionType,
): ResultReducerType => {
  switch (type) {
    case SET_RESULT:
      return { ...state, status, planet, timeTaken };
    default:
      return state;
  }
};
