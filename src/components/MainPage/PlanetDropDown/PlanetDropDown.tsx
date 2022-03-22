import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// eslint-disable-next-line import/named
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../store';
import PlanetDropDownContainer from './PlanetDropDown.style';
import PlanetDropDownType from './PlanetDropDown.type';
import { setSelectedPlanets, setVehicleAndUpdateCount } from '../../../actions';

const mapStateToProps = (state: RootState) => ({
  planetDetailsReducer: state.planetDetailsReducer,
  selectedPlanetsReducer: state.selectedPlanetsReducer,
  selectedVehiclesReducer: state.selectedVehiclesReducer,
});

const mapDispatchToProps = {
  setSelectedPlanetsProp: setSelectedPlanets,
  setVehicleAndUpdateCountProp: setVehicleAndUpdateCount,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & PlanetDropDownType;

const PlanetDropDown = ({
  dropdownId,
  planetDetailsReducer,
  selectedPlanetsReducer,
  selectedVehiclesReducer,
  setSelectedPlanetsProp,
  setVehicleAndUpdateCountProp,
  updateTimeTaken,
}: Props) => {
  const updateDetails = (value: string) => {
    // Update time as we are changing planet
    updateTimeTaken(selectedVehiclesReducer[dropdownId], '', dropdownId);
    //if user has selected any planet update the selected list of planets
    setSelectedPlanetsProp(value, dropdownId);
    setVehicleAndUpdateCountProp(
      selectedVehiclesReducer[dropdownId],
      '',
      dropdownId,
    );
  };

  return (
    <PlanetDropDownContainer>
      <Autocomplete
        id={`planet-dropdown-${dropdownId}`}
        data-testid={`planet-dropdown-${dropdownId}`}
        options={Object.keys(planetDetailsReducer).filter(
          (planet: string) => !selectedPlanetsReducer.includes(planet),
        )}
        getOptionSelected={(_, value: string) =>
          Object.keys(planetDetailsReducer).includes(value)
        }
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label={`Destination - ${dropdownId}`} />
        )}
        onChange={(_, value) => {
          if (value) {
            updateDetails(value);
          }
        }}
        onInputChange={(e, value) => {
          if (!value) {
            updateDetails(value);
          }
        }}
      />
    </PlanetDropDownContainer>
  );
};

export default connector(PlanetDropDown);
