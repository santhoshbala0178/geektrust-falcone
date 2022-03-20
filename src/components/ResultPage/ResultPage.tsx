import React from 'react';
// eslint-disable-next-line import/named
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetSelectedPlanets, resetSelectedVehicles } from '../../actions';
import { FAILURE_MESSAGE, SUCCESS_MESSAGE } from '../../constants/constants';
import { RootState } from '../../store';
import {
  Content,
  Message,
  ResultPageContainer,
  StartAgain,
} from './ResultPage.style';

const mapStateToProps = (state: RootState) => ({
  resultsReducer: state.resultsReducer,
});

const mapDispatchToProps = {
  resetSelectedPlanetsProps: resetSelectedPlanets,
  resetSelectedVehiclesProps: resetSelectedVehicles,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const ResultPage = ({
  resultsReducer,
  resetSelectedPlanetsProps,
  resetSelectedVehiclesProps,
}: Props) => {
  const resetSelections = () => {
    resetSelectedPlanetsProps();
    resetSelectedVehiclesProps();
  };
  return (
    <ResultPageContainer>
      <Message>
        {resultsReducer.status === 'success'
          ? SUCCESS_MESSAGE
          : FAILURE_MESSAGE}
      </Message>
      <div>
        <Content>Time taken: {resultsReducer.timeTaken}</Content>
        {resultsReducer.planet && (
          <Content>
            Planet found: <b>{resultsReducer.planet}</b>
          </Content>
        )}
      </div>
      <Link to="/">
        <StartAgain onClick={resetSelections}>Start Again</StartAgain>
      </Link>
    </ResultPageContainer>
  );
};

export default connector(ResultPage);
