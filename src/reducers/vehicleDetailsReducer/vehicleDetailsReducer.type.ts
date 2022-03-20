export type VehicleDetailsType = {
  name: string;
  total_no: number;
  max_distance: number;
  speed: number;
};

export type VehicleDetailsActionType = {
  type: string;
  vehicleDetails?: VehicleDetailsType[];
  vehicleName?: string;
};
