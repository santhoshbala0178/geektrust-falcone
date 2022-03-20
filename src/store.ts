import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { planetDetailsReducer } from './reducers/planetDetailsReducer/planetDetailsReducer';
import { vehicleDetailsReducer } from './reducers/vehicleDetailsReducer/vehicleDetailsReducer';
import { selectedPlanetsReducer } from './reducers/selectedPlanetsReducer/selectedPlanetsReducer';
import { selectedVehiclesReducer } from './reducers/selectedVehiclesReducer/selectedVehiclesReducer';
import { resultsReducer } from './reducers/resultReducer/resultsReducer';

const rootReducer = combineReducers({
  planetDetailsReducer,
  vehicleDetailsReducer,
  selectedPlanetsReducer,
  selectedVehiclesReducer,
  resultsReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
