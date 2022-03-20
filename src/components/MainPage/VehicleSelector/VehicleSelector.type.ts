import { PlanetDistance, VehicleDetailsType } from '../MainPage/MainPage.type';

type VehicleSelectorType = {
  vehicleDetails: VehicleDetailsType[];
  id: number;
  planetDistance: PlanetDistance | number;
  updateVehicleDetails: (
    prevVehicleName: string,
    curVehicleName: string,
    id: number,
  ) => void;
};

export default VehicleSelectorType;
