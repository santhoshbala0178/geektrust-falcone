import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import PlanetDropDownContainer from './PlanetDropDown.style';
import PlanetDropDownType from './PlanetDropDown.type';

const PlanetDropDown = ({
  dropdownId,
  planets,
  setSelectedPlanets,
  selectedPlanets,
  selectedVehicles,
  updateVehicleDetails,
}: PlanetDropDownType) => {
  const updateSelectedPlanets = (currentPlanet: string) => {
    const currentPlanets = [...selectedPlanets];
    currentPlanets[dropdownId] = currentPlanet;
    setSelectedPlanets([...currentPlanets]);
  };

  return (
    <PlanetDropDownContainer>
      <Autocomplete
        id={`planet-dropdown-${dropdownId}`}
        options={planets.filter((planet) => !selectedPlanets.includes(planet))}
        getOptionSelected={(option, value) => planets.includes(value)}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label={`Destination - ${dropdownId}`} />
        )}
        onChange={(e, value) => {
          if (value) {
            //if user has selected any planet update the selected list of planets
            updateSelectedPlanets(value);
          }
        }}
        onInputChange={(e, value) => {
          if (!value) {
            // If the value is changed to empty, we should hide vehicle selection and reset it
            updateSelectedPlanets(value);
            updateVehicleDetails(selectedVehicles[dropdownId], '', dropdownId);
          }
        }}
      />
    </PlanetDropDownContainer>
  );
};

export default PlanetDropDown;
