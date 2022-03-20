export type GetResultType = {
  token: string;
  planetNames: string[];
  vehicleNames: string[];
};

export type ResultResponseType = {
  planet_name?: string;
  status?: string;
  error?: string;
};

export type PlanetDistance = {
  distance: number;
};

export type PlanetDetailsType = {
  name: string;
  distance: PlanetDistance;
};
