import React from 'react';
// eslint-disable-next-line import/named
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../store';
import {
  TimeTakenContainer,
  TimeTakenDescription,
  TimeTakenValue,
} from './TimeTaken.style';
import { TimeTakenType } from './TimeTaken.type';

const mapStateToProps = (state: RootState) => ({
  planetDetailsReducer: state.planetDetailsReducer,
  vehicleDetailsReducer: state.vehicleDetailsReducer,
  selectedPlanetsReducer: state.selectedPlanetsReducer,
  selectedVehiclesReducer: state.selectedVehiclesReducer,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector> & TimeTakenType;

const TimeTaken = ({ timeTaken }: Props) => {
  return (
    <TimeTakenContainer>
      <TimeTakenDescription>Time Taken:</TimeTakenDescription>
      <TimeTakenValue data-testid="time-taken">{timeTaken}</TimeTakenValue>
    </TimeTakenContainer>
  );
};

export default connector(TimeTaken);
