import React, { useEffect, useMemo, useState } from 'react';
import { TOTAL_SELECTION } from '../../../constants/constants';
import { getPlanetDetails, getVehicleDetails } from '../../../utils/apiUtils';
import FindButton from '../FindButton/FindButton';
import PlanetDropDown from '../PlanetDropDown';
import VehicleSelector from '../VehicleSelector';
import {
  MainPageContainer,
  MainPageHeaderText,
  PlanetSelectors,
  SelectorPanel,
  TimeTaken,
  TimeTakenDescription,
  TimeTakenValue,
} from './MainPage.style';
import { PlanetKeyPairDetailType, VehicleDetailsType } from './MainPage.type';

const MainPage = () => {
  const [planetDetails, setPlanetDetails] = useState<PlanetKeyPairDetailType>(
    {},
  );
  const [vehicleDetails, setVehicleDetails] = useState<VehicleDetailsType[]>(
    [],
  );
  const [selectedPlanets, setSelectedPlanets] = useState<string[]>(
    Array(TOTAL_SELECTION).fill(''),
  );
  const [selectedVehicles, setSelectedVehicles] = useState<string[]>(
    Array(TOTAL_SELECTION).fill(''),
  );

  useEffect(() => {
    const getData = async () => {
      // Get List of planets and their distances, list of vehicles
      const planetDetailsList = await getPlanetDetails();
      const vehicleList = await getVehicleDetails();
      setPlanetDetails({ ...planetDetailsList });
      setVehicleDetails([...vehicleList]);
    };
    getData();
  }, []);

  const updateVehicleDetails = (
    prevVehicleName: string,
    curVehicleName: string,
    id: number,
  ) => {
    // Update vehicle count based on the selection
    setVehicleDetails(
      vehicleDetails.map((vehicle: VehicleDetailsType) => {
        if (vehicle.name === curVehicleName) {
          return {
            ...vehicle,
            total_no: vehicle.total_no - 1,
          };
        } else if (vehicle.name === prevVehicleName) {
          return {
            ...vehicle,
            total_no: vehicle.total_no + 1,
          };
        }

        return vehicle;
      }),
    );

    // update selected vehicles
    const currentVehicles = [...selectedVehicles];
    currentVehicles[id] = curVehicleName;
    setSelectedVehicles([...currentVehicles]);
  };

  const timeTaken = useMemo(() => {
    // Get the total time taken for search
    let totalTime = 0;
    selectedPlanets.map((planet, idx) => {
      const selectedVehicle = vehicleDetails.find(
        (vehicle) => vehicle.name === selectedVehicles[idx],
      );
      if (selectedVehicle) {
        totalTime += planetDetails[planet] / selectedVehicle.speed;
      }
    });

    return totalTime;
  }, [selectedPlanets, selectedVehicles, planetDetails, vehicleDetails]);

  return (
    <MainPageContainer>
      <MainPageHeaderText>
        Select planets you want to search in:
      </MainPageHeaderText>
      <PlanetSelectors>
        {Array(TOTAL_SELECTION)
          .fill(0)
          .map((_, id) => {
            return (
              <SelectorPanel key={`selector-${id}`}>
                <PlanetDropDown
                  dropdownId={id}
                  planets={Object.keys(planetDetails)}
                  setSelectedPlanets={setSelectedPlanets}
                  selectedPlanets={selectedPlanets}
                  selectedVehicles={selectedVehicles}
                  updateVehicleDetails={updateVehicleDetails}
                />
                {selectedPlanets[id] && (
                  <VehicleSelector
                    id={id}
                    vehicleDetails={vehicleDetails}
                    planetDistance={planetDetails[selectedPlanets[id]]}
                    updateVehicleDetails={updateVehicleDetails}
                  />
                )}
              </SelectorPanel>
            );
          })}
      </PlanetSelectors>
      <TimeTaken>
        <TimeTakenDescription>Time Taken:</TimeTakenDescription>
        <TimeTakenValue>{timeTaken}</TimeTakenValue>
      </TimeTaken>
      <FindButton
        planetNames={selectedPlanets}
        vehicleNames={selectedVehicles}
      />
    </MainPageContainer>
  );
};

export default MainPage;
