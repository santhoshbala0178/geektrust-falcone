type PlanetDropDownType = {
  dropdownId: number;
  planets: string[];
  setSelectedPlanets: React.Dispatch<React.SetStateAction<string[]>>;
  selectedPlanets: string[];
  selectedVehicles: string[];
  updateVehicleDetails: (
    prevVehicleName: string,
    curVehicleName: string,
    id: number,
  ) => void;
};

export default PlanetDropDownType;
