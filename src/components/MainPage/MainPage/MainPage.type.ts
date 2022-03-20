export type Name = {
  name: string;
};

export type PlanetDistance = {
  distance: number;
};

export type PlanetKeyPairDetailType = {
  [key: string]: number;
};

export type PlanetDetailsType = {
  name: string;
  distance: PlanetDistance;
};

export type VehicleDetailsType = {
  name: string;
  total_no: number;
  max_distance: number;
  speed: number;
};
